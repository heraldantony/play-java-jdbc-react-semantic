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
import java.sql.Timestamp;
import java.sql.Types;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.logging.Logger;
import java.util.stream.Stream;
import javax.inject.Inject;
import javax.inject.Singleton;
import models.Employee;
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
public class JDBCEmployeeRepository implements EmployeeRepository {

  private static final Logger logger = Logger.getLogger(JDBCEmployeeRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCEmployeeRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public CompletionStage<Stream<Employee>> find(
      SearchListOptions searchOptions, String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(searchOptions, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<Employee>> findByFirstName(
      String firstName, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByFirstName(firstName, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Stream<Employee>> findByLastName(
      String lastName, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByLastName(lastName, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Stream<Employee>> findByEmail(String email, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByEmail(email, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Stream<Employee>> findByPhoneNumber(
      String phoneNumber, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByPhoneNumber(phoneNumber, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Employee>> readEmployee(
      long employeeId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadEmployee(employeeId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Employee>> saveEmployee(
      Employee employee, String loggedInUsername) {

    if (employee.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateEmployee(employee, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddEmployee(employee, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<Employee>> deleteEmployee(
      long employeeId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteEmployee(employeeId, loggedInUsername), ec);
  }

  public Stream<Employee> jdbcFind(SearchListOptions searchOptions, String loggedInUsername) {

    String sql =
        "select  employee.id, employee.firstName as firstName ,employee.lastName as lastName ,employee.email as email ,employee.phoneNumber as phoneNumber ,employee.hireDate as hireDate ,employee.salary as salary ,employee.commissionPct as commissionPct"
            + " from employee employee ";

    if (searchOptions.getSearchString() != null && searchOptions.getSearchString().trim() != "") {
      sql +=
          " WHERE MATCH ( firstName,  lastName,  email,  phoneNumber) "
              + " AGAINST ('"
              + searchOptions.getSearchString()
              + "')";
    }

    sql += " limit " + searchOptions.getOffset() + ", " + searchOptions.getLimit();

    PreparedStatement findStatement = null;
    List<Employee> employeeList = new ArrayList<Employee>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        employeeList.add(EmployeeMapper.mapRow(results, 0));
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
    return employeeList.stream();
  }

  public Optional<Employee> jdbcFindByFirstName(String firstName, String loggedInUsername) {
    String sql =
        "select employee.id, employee.firstName as firstName,employee.lastName as lastName,employee.email as email,employee.phoneNumber as phoneNumber,employee.hireDate as hireDate,employee.salary as salary,employee.commissionPct as commissionPct"
            + " from employee employee where employee.firstName = ?";
    PreparedStatement findByFirstNameStatement = null;
    Employee employeeObj = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByFirstNameStatement = con.prepareStatement(sql);
      findByFirstNameStatement.setString(1, firstName);
      ResultSet results = findByFirstNameStatement.executeQuery();
      while (results.next()) {
        employeeObj = EmployeeMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByFirstNameStatement != null) {
          try {
            findByFirstNameStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(employeeObj);
  }

  public Stream<Employee> jdbcFindByLastName(String lastName, String loggedInUsername) {
    String sql =
        "select employee.id, employee.firstName as firstName,employee.lastName as lastName,employee.email as email,employee.phoneNumber as phoneNumber,employee.hireDate as hireDate,employee.salary as salary,employee.commissionPct as commissionPct"
            + " from employee employee where employee.lastName = ?";
    PreparedStatement findByLastNameStatement = null;
    List<Employee> employeeList = new ArrayList<Employee>();
    Connection con = null;
    try {
      con = db.getConnection();
      findByLastNameStatement = con.prepareStatement(sql);
      findByLastNameStatement.setString(1, lastName);
      ResultSet results = findByLastNameStatement.executeQuery();
      while (results.next()) {
        employeeList.add(EmployeeMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByLastNameStatement != null) {
          try {
            findByLastNameStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return employeeList.stream();
  }

  public Stream<Employee> jdbcFindByEmail(String email, String loggedInUsername) {
    String sql =
        "select employee.id, employee.firstName as firstName,employee.lastName as lastName,employee.email as email,employee.phoneNumber as phoneNumber,employee.hireDate as hireDate,employee.salary as salary,employee.commissionPct as commissionPct"
            + " from employee employee where employee.email = ?";
    PreparedStatement findByEmailStatement = null;
    List<Employee> employeeList = new ArrayList<Employee>();
    Connection con = null;
    try {
      con = db.getConnection();
      findByEmailStatement = con.prepareStatement(sql);
      findByEmailStatement.setString(1, email);
      ResultSet results = findByEmailStatement.executeQuery();
      while (results.next()) {
        employeeList.add(EmployeeMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByEmailStatement != null) {
          try {
            findByEmailStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return employeeList.stream();
  }

  public Stream<Employee> jdbcFindByPhoneNumber(String phoneNumber, String loggedInUsername) {
    String sql =
        "select employee.id, employee.firstName as firstName,employee.lastName as lastName,employee.email as email,employee.phoneNumber as phoneNumber,employee.hireDate as hireDate,employee.salary as salary,employee.commissionPct as commissionPct"
            + " from employee employee where employee.phoneNumber = ?";
    PreparedStatement findByPhoneNumberStatement = null;
    List<Employee> employeeList = new ArrayList<Employee>();
    Connection con = null;
    try {
      con = db.getConnection();
      findByPhoneNumberStatement = con.prepareStatement(sql);
      findByPhoneNumberStatement.setString(1, phoneNumber);
      ResultSet results = findByPhoneNumberStatement.executeQuery();
      while (results.next()) {
        employeeList.add(EmployeeMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByPhoneNumberStatement != null) {
          try {
            findByPhoneNumberStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return employeeList.stream();
  }

  public Optional<Employee> jdbcReadEmployee(long employeeId, String loggedInUsername) {
    String sql =
        "select employee.id, employee.firstName as firstName ,employee.lastName as lastName ,employee.email as email ,employee.phoneNumber as phoneNumber ,employee.hireDate as hireDate ,employee.salary as salary ,employee.commissionPct as commissionPct "
            + " from employee employee where employee.id = ?";
    PreparedStatement findByIdStatement = null;
    Employee employee = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, employeeId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        employee = EmployeeMapper.mapRow(results, 0);
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

    return Optional.ofNullable(employee);
  }

  public Optional<Employee> jdbcAddEmployee(Employee employee, String loggedInUsername) {
    String sql =
        "insert into employee (firstName ,lastName ,email ,phoneNumber ,hireDate ,salary ,commissionPct ) values(? ,? ,? ,? ,? ,? ,? )";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

      insertStatement.setString(1, employee.getFirstName());

      insertStatement.setString(2, employee.getLastName());

      insertStatement.setString(3, employee.getEmail());

      insertStatement.setString(4, employee.getPhoneNumber());

      insertStatement.setTimestamp(5, Timestamp.from(employee.getHireDate().toInstant()));

      insertStatement.setLong(6, employee.getSalary());

      insertStatement.setLong(7, employee.getCommissionPct());

      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        employee.setId(rs.getLong(1));
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
    return Optional.ofNullable(employee);
  }

  public Optional<Employee> jdbcUpdateEmployee(Employee employee, String loggedInUsername) {
    String sql =
        "update employee set (firstName=? ,lastName=? ,email=? ,phoneNumber=? ,hireDate=? ,salary=? ,commissionPct=? ) where id=?";

    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);

      updateStatement.setString(1, employee.getFirstName());

      updateStatement.setString(2, employee.getLastName());

      updateStatement.setString(3, employee.getEmail());

      updateStatement.setString(4, employee.getPhoneNumber());

      updateStatement.setTimestamp(5, Timestamp.from(employee.getHireDate().toInstant()));

      updateStatement.setLong(6, employee.getSalary());

      updateStatement.setLong(7, employee.getCommissionPct());

      updateStatement.setLong(8, employee.getId());
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
    return Optional.ofNullable(employee);
  }

  public Optional<Employee> jdbcSaveEmployee(Employee employee, String loggedInUsername) {

    String sql =
        "call save_employee(                           ?,?,?,?                                                   ?,?,?,?                                                   ?,?,?,?                                                   ?,?,?,?                                                   ?,?,?,?                                                   ?,?,?,?                                                   ?,                         )";
    CallableStatement saveEmployeeCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveEmployeeCall = con.prepareCall(sql);

      saveEmployeeCall.setString(0, employee.getFirstName());

      saveEmployeeCall.setString(1, employee.getLastName());

      saveEmployeeCall.setString(2, employee.getEmail());

      saveEmployeeCall.setString(3, employee.getPhoneNumber());

      saveEmployeeCall.setTimestamp(4, Timestamp.from(employee.getHireDate().toInstant()));

      saveEmployeeCall.setLong(5, employee.getSalary());

      saveEmployeeCall.setLong(6, employee.getCommissionPct());

      saveEmployeeCall.setString(8, loggedInUsername);
      saveEmployeeCall.registerOutParameter(9, Types.BIGINT);
      saveEmployeeCall.registerOutParameter(10, Types.BIGINT);
      saveEmployeeCall.registerOutParameter(11, Types.VARCHAR);
      saveEmployeeCall.execute();
      long ec = saveEmployeeCall.getLong(10);
      if (ec > 0) {
        throw new FFWException((String) saveEmployeeCall.getString(11));
      }
      id = saveEmployeeCall.getLong(9);
      employee.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveEmployeeCall != null) {
          try {
            saveEmployeeCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(employee);
  }

  public Optional<Employee> jdbcDeleteEmployee(long employeeId, String loggedInUsername) {
    String sql =
        "delete from employee where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    Employee employee = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, employeeId);
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
    return Optional.ofNullable(employee);
  }

  static class EmployeeMapper {
    public static Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
      Employee employee = new Employee();
      employee.setId(rs.getLong("id"));

      employee.setFirstName(rs.getString("firstName"));

      employee.setLastName(rs.getString("lastName"));

      employee.setEmail(rs.getString("email"));

      employee.setPhoneNumber(rs.getString("phoneNumber"));

      employee.setHireDate(rs.getTimestamp("hireDate").toInstant().atZone(ZoneId.systemDefault()));

      employee.setSalary(rs.getLong("salary"));

      employee.setCommissionPct(rs.getLong("commissionPct"));

      return employee;
    }
  }
}
