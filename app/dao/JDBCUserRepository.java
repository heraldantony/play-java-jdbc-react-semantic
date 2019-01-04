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
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.CompletionStage;
import java.util.logging.Logger;
import java.util.stream.Stream;
import javax.inject.Inject;
import javax.inject.Singleton;
import models.User;
import net.jodah.failsafe.*;
import play.db.Database;
import util.FFWException;
import v1.api.ApiExecutionContext;

/**
 * A repository that provides a non-blocking API with a custom execution context and circuit
 * breaker.
 */
@Singleton
public class JDBCUserRepository implements UserRepository {

  private static final Logger logger = Logger.getLogger(JDBCUserRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCUserRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public void notifyMeOnOpen() {
    logger.warning("My CircuitBreaker is now open, and will not close for one minute");
  }

  public CompletionStage<Stream<User>> find(String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<User>> findByUsername(String username, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByUsername(username, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<User>> findByAuthToken(String token, String loggedInUsername) {
    return supplyAsync(() -> jdbcFindByToken(token, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<User>> findByUsernameAndPassword(
      String username, String password) {
    return supplyAsync(() -> jdbcFindByUsernamePassword(username, password), ec);
  }

  @Override
  public CompletionStage<String> createToken(String username) {
    return supplyAsync(() -> jdbcCreateToken(username), ec);
  }

  @Override
  public CompletionStage<String> deleteToken(String username, String token) {
    return supplyAsync(() -> jdbcDeleteToken(username, token), ec);
  }

  public String jdbcCreateToken(String username) {

    String token = UUID.randomUUID().toString();
    String sql = "insert into user_auth_token (username, token) values (?, ?)";
    PreparedStatement statement = null;
    List<User> userList = new ArrayList<User>();
    Connection con = null;
    try {
      con = db.getConnection();
      statement = con.prepareStatement(sql);
      statement.setString(1, username);
      statement.setString(2, token);
      boolean result = statement.execute();

    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (statement != null) {
          try {
            statement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return token;
  }

  public String jdbcDeleteToken(String username, String token) {

    String sql = "delete from user_auth_token where username = ? and token = ?";
    PreparedStatement statement = null;
    List<User> userList = new ArrayList<User>();
    Connection con = null;
    try {
      con = db.getConnection();
      statement = con.prepareStatement(sql);
      statement.setString(1, username);
      statement.setString(2, token);
      boolean result = statement.execute();

    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (statement != null) {
          try {
            statement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return token;
  }

  public CompletionStage<Optional<User>> readUser(long userId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadUser(userId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<User>> saveUser(User user, String loggedInUsername) {
    if (user.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateUser(user, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddUser(user, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<User>> deleteUser(long userId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteUser(userId, loggedInUsername), ec);
  }

  public Stream<User> jdbcFind(String loggedInUsername) {
    String sql =
        "select user.id as id,user.username as username,user.name as name,user.alias as alias,user.enabled as enabled"
            + " from user user ";
    PreparedStatement findStatement = null;
    List<User> userList = new ArrayList<User>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        userList.add(UserMapper.mapRow(results, 0));
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
    return userList.stream();
  }

  /*
   * args is a list of strings
   */
  public Optional<User> jdbcFindUsingSql(String sql, List<String> args) {
    PreparedStatement findByUsernameStatement = null;
    User user = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByUsernameStatement = con.prepareStatement(sql);
      int i = 0;
      for (Iterator iterator = args.iterator(); iterator.hasNext(); ) {
        String arg = (String) iterator.next();
        i++;
        findByUsernameStatement.setString(i, arg);
      }
      ResultSet results = findByUsernameStatement.executeQuery();
      while (results.next()) {
        user = UserMapper.mapRow(results, 0);
      }
      if (user == null) {
        return Optional.ofNullable(user);
      }
      Optional<List<String>> optionalAuthorities =
          jdbcReadUserAuthorities(user.getUsername(), user.getUsername());
      if (optionalAuthorities.isPresent()) {
        user.setAuthorities(optionalAuthorities.get());
      }

    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByUsernameStatement != null) {
          try {
            findByUsernameStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(user);
  }

  public Optional<User> jdbcFindByUsername(String username, String loggedInUsername) {
    String sql =
        "select user.id as id,user.username as username,user.name as name,user.email as email, user.alias as alias,user.enabled as enabled"
            + " from user user where user.username = ?";
    List<String> list = new ArrayList<String>();
    list.add(username);
    return jdbcFindUsingSql(sql, list);
  }

  public Optional<User> jdbcFindByToken(String token, String loggedInUsername) {
    String sql =
        "select user.id as id,user.username as username,user.name as name,user.email as email, user.alias as alias,user.enabled as enabled"
            + " from user user where user.username = (select username from user_auth_token where token = ?)";
    List<String> list = new ArrayList<String>();
    list.add(token);
    return jdbcFindUsingSql(sql, list);
  }

  public Optional<User> jdbcFindByUsernamePassword(String username, String password) {
    String sql =
        "select user.id as id,user.username as username,user.name as name,user.email as email,user.alias as alias,user.enabled as enabled"
            + " from user user where user.username = ? and user.password = ?";
    List<String> list = new ArrayList<String>();
    list.add(username);
    list.add(password);
    return jdbcFindUsingSql(sql, list);
  }

  public Optional<User> jdbcReadUser(long userId, String loggedInUsername) {
    String sql =
        "select user.id as id,user.username as username,user.name as name,user.email as email,user.alias as alias,user.enabled as enabled"
            + " from user user where user.id = ?";
    PreparedStatement findByIdStatement = null;
    User user = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, userId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        user = UserMapper.mapRow(results, 0);
      }
      List<String> authorities =
          jdbcReadUserAuthorities(user.getUsername(), loggedInUsername).get();
      user.setAuthorities(authorities);
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

    return Optional.ofNullable(user);
  }

  public Optional<List<String>> jdbcReadUserAuthorities(String username, String loggedInUsername) {
    String sql =
        "select auth.username as username,auth.authority as authority"
            + " from authorities auth where auth.username = ?";
    PreparedStatement findByStatement = null;
    Connection con = null;
    List<String> authorities = new ArrayList<String>();
    try {
      con = db.getConnection();
      findByStatement = con.prepareStatement(sql);
      findByStatement.setString(1, username);
      ResultSet results = findByStatement.executeQuery();
      while (results.next()) {
        authorities.add(results.getString("authority"));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByStatement != null) {
          try {
            findByStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }

    return Optional.ofNullable(authorities);
  }

  public Optional<User> jdbcAddUser(User user, String loggedInUsername) {
    String sql = "insert into user (username, password, email) values(?, ?, ?)";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
      insertStatement.setString(1, user.getUsername());
      insertStatement.setString(2, user.getPassword());
      insertStatement.setString(3, user.getEmail());
      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        user.setId(rs.getLong(1));
      }
      user.setPassword("");
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
    return Optional.ofNullable(user);
  }

  public Optional<User> jdbcUpdateUser(User user, String loggedInUsername) {

    String sql = "update user set password=?, email=?, name=?, alias=?) where id=?";
    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);
      updateStatement.setString(1, user.getPassword());
      updateStatement.setString(2, user.getEmail());
      updateStatement.setString(3, user.getName());
      updateStatement.setString(4, user.getAlias());
      updateStatement.setLong(5, user.getId());
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
    user.setPassword("");
    return Optional.ofNullable(user);
  }

  public Optional<User> jdbcSaveUserOld(User user, String loggedInUsername) {

    String sql = "call save_user(?, ?, ?, ?, ?, ?,?,?,? )";
    CallableStatement saveUserCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveUserCall = con.prepareCall(sql);

      saveUserCall.setLong(1, user.getId());

      saveUserCall.setString(2, user.getUsername());

      saveUserCall.setString(3, user.getName());

      saveUserCall.setString(4, user.getPassword());

      saveUserCall.setString(5, user.getAlias());

      saveUserCall.setBoolean(6, user.getEnabled());

      saveUserCall.setString(7, loggedInUsername);
      saveUserCall.registerOutParameter(8, Types.BIGINT);
      saveUserCall.registerOutParameter(9, Types.BIGINT);
      saveUserCall.registerOutParameter(10, Types.VARCHAR);
      saveUserCall.execute();
      long ec = saveUserCall.getLong(9);
      if (ec > 0) {
        throw new FFWException((String) saveUserCall.getString(10));
      }
      id = saveUserCall.getLong(8);
      user.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveUserCall != null) {
          try {
            saveUserCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(user);
  }

  public Optional<User> jdbcDeleteUser(long userId, String loggedInUsername) {
    String sql =
        "delete from user where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    User user = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, userId);
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
    return Optional.ofNullable(user);
  }

  static class UserMapper {
    public static User mapRow(ResultSet rs, int rowNum) throws SQLException {
      User user = new User();

      user.setId(rs.getLong("id"));

      user.setUsername(rs.getString("username"));

      user.setName(rs.getString("name"));
      user.setName(rs.getString("email"));

      user.setAlias(rs.getString("alias"));

      user.setEnabled(rs.getBoolean("enabled"));

      return user;
    }
  }
}
