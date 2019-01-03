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
import models.Country;
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
public class JDBCCountryRepository implements CountryRepository {

  private static final Logger logger = Logger.getLogger(JDBCCountryRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCCountryRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public CompletionStage<Stream<Country>> find(
      SearchListOptions searchOptions, String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(searchOptions, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<Country>> findByCountryName(
      String countryName, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByCountryName(countryName, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Country>> readCountry(long countryId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadCountry(countryId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Country>> saveCountry(Country country, String loggedInUsername) {

    if (country.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateCountry(country, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddCountry(country, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<Country>> deleteCountry(long countryId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteCountry(countryId, loggedInUsername), ec);
  }

  public Stream<Country> jdbcFind(SearchListOptions searchOptions, String loggedInUsername) {

    String sql =
        "select  country.id, country.countryName as countryName" + " from country country ";

    if (searchOptions.getSearchString() != null && searchOptions.getSearchString().trim() != "") {
      sql +=
          " WHERE MATCH ( countryName) " + " AGAINST ('" + searchOptions.getSearchString() + "')";
    }

    sql += " limit " + searchOptions.getOffset() + ", " + searchOptions.getLimit();

    PreparedStatement findStatement = null;
    List<Country> countryList = new ArrayList<Country>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        countryList.add(CountryMapper.mapRow(results, 0));
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
    return countryList.stream();
  }

  public Optional<Country> jdbcFindByCountryName(String countryName, String loggedInUsername) {
    String sql =
        "select country.id, country.countryName as countryName"
            + " from country country where country.countryName = ?";
    PreparedStatement findByCountryNameStatement = null;
    Country countryObj = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByCountryNameStatement = con.prepareStatement(sql);
      findByCountryNameStatement.setString(1, countryName);
      ResultSet results = findByCountryNameStatement.executeQuery();
      while (results.next()) {
        countryObj = CountryMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByCountryNameStatement != null) {
          try {
            findByCountryNameStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(countryObj);
  }

  public Optional<Country> jdbcReadCountry(long countryId, String loggedInUsername) {
    String sql =
        "select country.id, country.countryName as countryName "
            + " from country country where country.id = ?";
    PreparedStatement findByIdStatement = null;
    Country country = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, countryId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        country = CountryMapper.mapRow(results, 0);
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

    return Optional.ofNullable(country);
  }

  public Optional<Country> jdbcAddCountry(Country country, String loggedInUsername) {
    String sql = "insert into country (countryName ) values(? )";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

      insertStatement.setString(1, country.getCountryName());

      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        country.setId(rs.getLong(1));
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
    return Optional.ofNullable(country);
  }

  public Optional<Country> jdbcUpdateCountry(Country country, String loggedInUsername) {
    String sql = "update country set (countryName=? ) where id=?";

    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);

      updateStatement.setString(1, country.getCountryName());

      updateStatement.setLong(2, country.getId());
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
    return Optional.ofNullable(country);
  }

  public Optional<Country> jdbcSaveCountry(Country country, String loggedInUsername) {

    String sql = "call save_country(                           ?,                         )";
    CallableStatement saveCountryCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveCountryCall = con.prepareCall(sql);

      saveCountryCall.setString(0, country.getCountryName());

      saveCountryCall.setString(2, loggedInUsername);
      saveCountryCall.registerOutParameter(3, Types.BIGINT);
      saveCountryCall.registerOutParameter(4, Types.BIGINT);
      saveCountryCall.registerOutParameter(5, Types.VARCHAR);
      saveCountryCall.execute();
      long ec = saveCountryCall.getLong(4);
      if (ec > 0) {
        throw new FFWException((String) saveCountryCall.getString(5));
      }
      id = saveCountryCall.getLong(3);
      country.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveCountryCall != null) {
          try {
            saveCountryCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(country);
  }

  public Optional<Country> jdbcDeleteCountry(long countryId, String loggedInUsername) {
    String sql =
        "delete from country where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    Country country = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, countryId);
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
    return Optional.ofNullable(country);
  }

  static class CountryMapper {
    public static Country mapRow(ResultSet rs, int rowNum) throws SQLException {
      Country country = new Country();
      country.setId(rs.getLong("id"));

      country.setCountryName(rs.getString("countryName"));

      return country;
    }
  }
}
