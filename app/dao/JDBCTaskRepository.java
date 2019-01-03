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
import models.Task;
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
public class JDBCTaskRepository implements TaskRepository {

  private static final Logger logger = Logger.getLogger(JDBCTaskRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCTaskRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public CompletionStage<Stream<Task>> find(
      SearchListOptions searchOptions, String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(searchOptions, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<Task>> findByTitle(String title, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByTitle(title, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Stream<Task>> findByDescription(
      String description, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByDescription(description, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Task>> readTask(long taskId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadTask(taskId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Task>> saveTask(Task task, String loggedInUsername) {

    if (task.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateTask(task, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddTask(task, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<Task>> deleteTask(long taskId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteTask(taskId, loggedInUsername), ec);
  }

  public Stream<Task> jdbcFind(SearchListOptions searchOptions, String loggedInUsername) {

    String sql =
        "select  task.id, task.title as title ,task.description as description"
            + " from task task ";

    if (searchOptions.getSearchString() != null && searchOptions.getSearchString().trim() != "") {
      sql +=
          " WHERE MATCH ( title,  description) "
              + " AGAINST ('"
              + searchOptions.getSearchString()
              + "')";
    }

    sql += " limit " + searchOptions.getOffset() + ", " + searchOptions.getLimit();

    PreparedStatement findStatement = null;
    List<Task> taskList = new ArrayList<Task>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        taskList.add(TaskMapper.mapRow(results, 0));
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
    return taskList.stream();
  }

  public Optional<Task> jdbcFindByTitle(String title, String loggedInUsername) {
    String sql =
        "select task.id, task.title as title,task.description as description"
            + " from task task where task.title = ?";
    PreparedStatement findByTitleStatement = null;
    Task taskObj = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByTitleStatement = con.prepareStatement(sql);
      findByTitleStatement.setString(1, title);
      ResultSet results = findByTitleStatement.executeQuery();
      while (results.next()) {
        taskObj = TaskMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByTitleStatement != null) {
          try {
            findByTitleStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(taskObj);
  }

  public Stream<Task> jdbcFindByDescription(String description, String loggedInUsername) {
    String sql =
        "select task.id, task.title as title,task.description as description"
            + " from task task where task.description = ?";
    PreparedStatement findByDescriptionStatement = null;
    List<Task> taskList = new ArrayList<Task>();
    Connection con = null;
    try {
      con = db.getConnection();
      findByDescriptionStatement = con.prepareStatement(sql);
      findByDescriptionStatement.setString(1, description);
      ResultSet results = findByDescriptionStatement.executeQuery();
      while (results.next()) {
        taskList.add(TaskMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByDescriptionStatement != null) {
          try {
            findByDescriptionStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return taskList.stream();
  }

  public Optional<Task> jdbcReadTask(long taskId, String loggedInUsername) {
    String sql =
        "select task.id, task.title as title ,task.description as description "
            + " from task task where task.id = ?";
    PreparedStatement findByIdStatement = null;
    Task task = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, taskId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        task = TaskMapper.mapRow(results, 0);
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

    return Optional.ofNullable(task);
  }

  public Optional<Task> jdbcAddTask(Task task, String loggedInUsername) {
    String sql = "insert into task (title ,description ) values(? ,? )";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

      insertStatement.setString(1, task.getTitle());

      insertStatement.setString(2, task.getDescription());

      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        task.setId(rs.getLong(1));
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
    return Optional.ofNullable(task);
  }

  public Optional<Task> jdbcUpdateTask(Task task, String loggedInUsername) {
    String sql = "update task set (title=? ,description=? ) where id=?";

    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);

      updateStatement.setString(1, task.getTitle());

      updateStatement.setString(2, task.getDescription());

      updateStatement.setLong(3, task.getId());
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
    return Optional.ofNullable(task);
  }

  public Optional<Task> jdbcSaveTask(Task task, String loggedInUsername) {

    String sql =
        "call save_task(                           ?,?,?,?                                                   ?,                         )";
    CallableStatement saveTaskCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveTaskCall = con.prepareCall(sql);

      saveTaskCall.setString(0, task.getTitle());

      saveTaskCall.setString(1, task.getDescription());

      saveTaskCall.setString(3, loggedInUsername);
      saveTaskCall.registerOutParameter(4, Types.BIGINT);
      saveTaskCall.registerOutParameter(5, Types.BIGINT);
      saveTaskCall.registerOutParameter(6, Types.VARCHAR);
      saveTaskCall.execute();
      long ec = saveTaskCall.getLong(5);
      if (ec > 0) {
        throw new FFWException((String) saveTaskCall.getString(6));
      }
      id = saveTaskCall.getLong(4);
      task.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveTaskCall != null) {
          try {
            saveTaskCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(task);
  }

  public Optional<Task> jdbcDeleteTask(long taskId, String loggedInUsername) {
    String sql =
        "delete from task where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    Task task = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, taskId);
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
    return Optional.ofNullable(task);
  }

  static class TaskMapper {
    public static Task mapRow(ResultSet rs, int rowNum) throws SQLException {
      Task task = new Task();
      task.setId(rs.getLong("id"));

      task.setTitle(rs.getString("title"));

      task.setDescription(rs.getString("description"));

      return task;
    }
  }
}
