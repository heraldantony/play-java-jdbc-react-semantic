/**
 * Copyright (C) Deepa Sysisoft Pvt Ltd (2015-2017). All Rights Reserved. This code may not be
 * copied or used without permission.
 */
package dao;

import static java.util.concurrent.CompletableFuture.supplyAsync;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.logging.Logger;
import java.util.stream.Stream;
import javax.inject.Inject;
import javax.inject.Singleton;
import models.Job;
import net.jodah.failsafe.*;
import play.db.Database;
import util.FFWException;
import util.SearchListOptions;
import v1.api.ApiExecutionContext;

/**
 * A repository that provides a non-blocking API with a custom execution context and circuit
 * breaker.
 */
@Singleton
public class JDBCJobRepository implements JobRepository {

  private static final Logger logger = Logger.getLogger(JDBCJobRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCJobRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public CompletionStage<Stream<Job>> find(
      SearchListOptions searchOptions, String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(searchOptions, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<Job>> findByJobTitle(String jobTitle, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByJobTitle(jobTitle, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Job>> readJob(long jobId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadJob(jobId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Job>> saveJob(Job job, String loggedInUsername) {

    if (job.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateJob(job, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddJob(job, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<Job>> deleteJob(long jobId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteJob(jobId, loggedInUsername), ec);
  }

  public Stream<Job> jdbcFind(SearchListOptions searchOptions, String loggedInUsername) {

    String sql =
        "select  job.id, job.jobTitle as jobTitle ,job.minSalary as minSalary ,job.maxSalary as maxSalary"
            + " from job job ";

    if (searchOptions.getSearchString() != null && searchOptions.getSearchString().trim() != "") {
      sql += " WHERE MATCH ( jobTitle) " + " AGAINST ('" + searchOptions.getSearchString() + "')";
    }

    sql += " limit " + searchOptions.getOffset() + ", " + searchOptions.getLimit();

    PreparedStatement findStatement = null;
    List<Job> jobList = new ArrayList<Job>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        jobList.add(JobMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findStatement != null) {
          try {
            findStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return jobList.stream();
  }

  public Optional<Job> jdbcFindByJobTitle(String jobTitle, String loggedInUsername) {
    String sql =
        "select job.id, job.jobTitle as jobTitle,job.minSalary as minSalary,job.maxSalary as maxSalary"
            + " from job job where job.jobTitle = ?";
    PreparedStatement findByJobTitleStatement = null;
    Job jobObj = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByJobTitleStatement = con.prepareStatement(sql);
      findByJobTitleStatement.setString(1, jobTitle);
      ResultSet results = findByJobTitleStatement.executeQuery();
      while (results.next()) {
        jobObj = JobMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByJobTitleStatement != null) {
          try {
            findByJobTitleStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(jobObj);
  }

  public Optional<Job> jdbcReadJob(long jobId, String loggedInUsername) {
    String sql =
        "select job.id, job.jobTitle as jobTitle ,job.minSalary as minSalary ,job.maxSalary as maxSalary "
            + " from job job where job.id = ?";
    PreparedStatement findByIdStatement = null;
    Job job = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, jobId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        job = JobMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByIdStatement != null) {
          try {
            findByIdStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }

    return Optional.ofNullable(job);
  }

  public Optional<Job> jdbcAddJob(Job job, String loggedInUsername) {
    String sql = "insert into job (jobTitle ,minSalary ,maxSalary ) values(? ,? ,? )";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

      insertStatement.setString(1, job.getJobTitle());

      insertStatement.setLong(2, job.getMinSalary());

      insertStatement.setLong(3, job.getMaxSalary());

      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        job.setId(rs.getLong(1));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (insertStatement != null) {
          try {
            insertStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(job);
  }

  public Optional<Job> jdbcUpdateJob(Job job, String loggedInUsername) {
    String sql = "update job set (jobTitle=? ,minSalary=? ,maxSalary=? ) where id=?";

    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);

      updateStatement.setString(1, job.getJobTitle());

      updateStatement.setLong(2, job.getMinSalary());

      updateStatement.setLong(3, job.getMaxSalary());

      updateStatement.setLong(4, job.getId());
      updateStatement.executeUpdate();
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (updateStatement != null) {
          try {
            updateStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(job);
  }

  public Optional<Job> jdbcSaveJob(Job job, String loggedInUsername) {

    String sql =
        "call save_job(                           ?,?,?,?                                                   ?,?,?,?                                                   ?,                         )";
    CallableStatement saveJobCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveJobCall = con.prepareCall(sql);

      saveJobCall.setString(0, job.getJobTitle());

      saveJobCall.setLong(1, job.getMinSalary());

      saveJobCall.setLong(2, job.getMaxSalary());

      saveJobCall.setString(4, loggedInUsername);
      saveJobCall.registerOutParameter(5, Types.BIGINT);
      saveJobCall.registerOutParameter(6, Types.BIGINT);
      saveJobCall.registerOutParameter(7, Types.VARCHAR);
      saveJobCall.execute();
      long ec = saveJobCall.getLong(6);
      if (ec > 0) {
        throw new FFWException((String) saveJobCall.getString(7));
      }
      id = saveJobCall.getLong(5);
      job.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveJobCall != null) {
          try {
            saveJobCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(job);
  }

  public Optional<Job> jdbcDeleteJob(long jobId, String loggedInUsername) {
    String sql =
        "delete from job where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    Job job = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, jobId);
      deleteStatement.setString(2, loggedInUsername);
      int result = deleteStatement.executeUpdate();

    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (deleteStatement != null) {
          try {
            deleteStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(job);
  }

  static class JobMapper {
    public static Job mapRow(ResultSet rs, int rowNum) throws SQLException {
      Job job = new Job();
      job.setId(rs.getLong("id"));

      job.setJobTitle(rs.getString("jobTitle"));

      job.setMinSalary(rs.getLong("minSalary"));

      job.setMaxSalary(rs.getLong("maxSalary"));

      return job;
    }
  }
}
