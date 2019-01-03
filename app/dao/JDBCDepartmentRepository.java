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
import models.Department;
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
public class JDBCDepartmentRepository implements DepartmentRepository {

  private static final Logger logger = Logger.getLogger(JDBCDepartmentRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCDepartmentRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public CompletionStage<Stream<Department>> find(
      SearchListOptions searchOptions, String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(searchOptions, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<Department>> findByDepartmentName(
      String departmentName, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByDepartmentName(departmentName, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Department>> readDepartment(
      long departmentId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadDepartment(departmentId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Department>> saveDepartment(
      Department department, String loggedInUsername) {

    if (department.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateDepartment(department, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddDepartment(department, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<Department>> deleteDepartment(
      long departmentId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteDepartment(departmentId, loggedInUsername), ec);
  }

  public Stream<Department> jdbcFind(SearchListOptions searchOptions, String loggedInUsername) {

    String sql =
        "select  department.id, department.departmentName as departmentName"
            + " from department department ";

    if (searchOptions.getSearchString() != null && searchOptions.getSearchString().trim() != "") {
      sql +=
          " WHERE MATCH ( departmentName) "
              + " AGAINST ('"
              + searchOptions.getSearchString()
              + "')";
    }

    sql += " limit " + searchOptions.getOffset() + ", " + searchOptions.getLimit();

    PreparedStatement findStatement = null;
    List<Department> departmentList = new ArrayList<Department>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        departmentList.add(DepartmentMapper.mapRow(results, 0));
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
    return departmentList.stream();
  }

  public Optional<Department> jdbcFindByDepartmentName(
      String departmentName, String loggedInUsername) {
    String sql =
        "select department.id, department.departmentName as departmentName"
            + " from department department where department.departmentName = ?";
    PreparedStatement findByDepartmentNameStatement = null;
    Department departmentObj = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByDepartmentNameStatement = con.prepareStatement(sql);
      findByDepartmentNameStatement.setString(1, departmentName);
      ResultSet results = findByDepartmentNameStatement.executeQuery();
      while (results.next()) {
        departmentObj = DepartmentMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByDepartmentNameStatement != null) {
          try {
            findByDepartmentNameStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(departmentObj);
  }

  public Optional<Department> jdbcReadDepartment(long departmentId, String loggedInUsername) {
    String sql =
        "select department.id, department.departmentName as departmentName "
            + " from department department where department.id = ?";
    PreparedStatement findByIdStatement = null;
    Department department = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, departmentId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        department = DepartmentMapper.mapRow(results, 0);
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

    return Optional.ofNullable(department);
  }

  public Optional<Department> jdbcAddDepartment(Department department, String loggedInUsername) {
    String sql = "insert into department (departmentName ) values(? )";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

      insertStatement.setString(1, department.getDepartmentName());

      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        department.setId(rs.getLong(1));
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
    return Optional.ofNullable(department);
  }

  public Optional<Department> jdbcUpdateDepartment(Department department, String loggedInUsername) {
    String sql = "update department set (departmentName=? ) where id=?";

    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);

      updateStatement.setString(1, department.getDepartmentName());

      updateStatement.setLong(2, department.getId());
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
    return Optional.ofNullable(department);
  }

  public Optional<Department> jdbcSaveDepartment(Department department, String loggedInUsername) {

    String sql = "call save_department(                           ?,                         )";
    CallableStatement saveDepartmentCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveDepartmentCall = con.prepareCall(sql);

      saveDepartmentCall.setString(0, department.getDepartmentName());

      saveDepartmentCall.setString(2, loggedInUsername);
      saveDepartmentCall.registerOutParameter(3, Types.BIGINT);
      saveDepartmentCall.registerOutParameter(4, Types.BIGINT);
      saveDepartmentCall.registerOutParameter(5, Types.VARCHAR);
      saveDepartmentCall.execute();
      long ec = saveDepartmentCall.getLong(4);
      if (ec > 0) {
        throw new FFWException((String) saveDepartmentCall.getString(5));
      }
      id = saveDepartmentCall.getLong(3);
      department.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveDepartmentCall != null) {
          try {
            saveDepartmentCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(department);
  }

  public Optional<Department> jdbcDeleteDepartment(long departmentId, String loggedInUsername) {
    String sql =
        "delete from department where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    Department department = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, departmentId);
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
    return Optional.ofNullable(department);
  }

  static class DepartmentMapper {
    public static Department mapRow(ResultSet rs, int rowNum) throws SQLException {
      Department department = new Department();
      department.setId(rs.getLong("id"));

      department.setDepartmentName(rs.getString("departmentName"));

      return department;
    }
  }
}
