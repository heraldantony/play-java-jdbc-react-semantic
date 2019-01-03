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
import models.Location;
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
public class JDBCLocationRepository implements LocationRepository {

  private static final Logger logger = Logger.getLogger(JDBCLocationRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCLocationRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public CompletionStage<Stream<Location>> find(
      SearchListOptions searchOptions, String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(searchOptions, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<Location>> findByStreetAddress(
      String streetAddress, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByStreetAddress(streetAddress, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Stream<Location>> findByPostalCode(
      String postalCode, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByPostalCode(postalCode, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Stream<Location>> findByCity(String city, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByCity(city, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Stream<Location>> findByStateProvince(
      String stateProvince, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByStateProvince(stateProvince, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Location>> readLocation(
      long locationId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadLocation(locationId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Location>> saveLocation(
      Location location, String loggedInUsername) {

    if (location.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateLocation(location, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddLocation(location, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<Location>> deleteLocation(
      long locationId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteLocation(locationId, loggedInUsername), ec);
  }

  public Stream<Location> jdbcFind(SearchListOptions searchOptions, String loggedInUsername) {

    String sql =
        "select  location.id, location.streetAddress as streetAddress ,location.postalCode as postalCode ,location.city as city ,location.stateProvince as stateProvince"
            + " from location location ";

    if (searchOptions.getSearchString() != null && searchOptions.getSearchString().trim() != "") {
      sql +=
          " WHERE MATCH ( streetAddress,  postalCode,  city,  stateProvince) "
              + " AGAINST ('"
              + searchOptions.getSearchString()
              + "')";
    }

    sql += " limit " + searchOptions.getOffset() + ", " + searchOptions.getLimit();

    PreparedStatement findStatement = null;
    List<Location> locationList = new ArrayList<Location>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        locationList.add(LocationMapper.mapRow(results, 0));
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
    return locationList.stream();
  }

  public Optional<Location> jdbcFindByStreetAddress(String streetAddress, String loggedInUsername) {
    String sql =
        "select location.id, location.streetAddress as streetAddress,location.postalCode as postalCode,location.city as city,location.stateProvince as stateProvince"
            + " from location location where location.streetAddress = ?";
    PreparedStatement findByStreetAddressStatement = null;
    Location locationObj = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByStreetAddressStatement = con.prepareStatement(sql);
      findByStreetAddressStatement.setString(1, streetAddress);
      ResultSet results = findByStreetAddressStatement.executeQuery();
      while (results.next()) {
        locationObj = LocationMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByStreetAddressStatement != null) {
          try {
            findByStreetAddressStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(locationObj);
  }

  public Stream<Location> jdbcFindByPostalCode(String postalCode, String loggedInUsername) {
    String sql =
        "select location.id, location.streetAddress as streetAddress,location.postalCode as postalCode,location.city as city,location.stateProvince as stateProvince"
            + " from location location where location.postalCode = ?";
    PreparedStatement findByPostalCodeStatement = null;
    List<Location> locationList = new ArrayList<Location>();
    Connection con = null;
    try {
      con = db.getConnection();
      findByPostalCodeStatement = con.prepareStatement(sql);
      findByPostalCodeStatement.setString(1, postalCode);
      ResultSet results = findByPostalCodeStatement.executeQuery();
      while (results.next()) {
        locationList.add(LocationMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByPostalCodeStatement != null) {
          try {
            findByPostalCodeStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return locationList.stream();
  }

  public Stream<Location> jdbcFindByCity(String city, String loggedInUsername) {
    String sql =
        "select location.id, location.streetAddress as streetAddress,location.postalCode as postalCode,location.city as city,location.stateProvince as stateProvince"
            + " from location location where location.city = ?";
    PreparedStatement findByCityStatement = null;
    List<Location> locationList = new ArrayList<Location>();
    Connection con = null;
    try {
      con = db.getConnection();
      findByCityStatement = con.prepareStatement(sql);
      findByCityStatement.setString(1, city);
      ResultSet results = findByCityStatement.executeQuery();
      while (results.next()) {
        locationList.add(LocationMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByCityStatement != null) {
          try {
            findByCityStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return locationList.stream();
  }

  public Stream<Location> jdbcFindByStateProvince(String stateProvince, String loggedInUsername) {
    String sql =
        "select location.id, location.streetAddress as streetAddress,location.postalCode as postalCode,location.city as city,location.stateProvince as stateProvince"
            + " from location location where location.stateProvince = ?";
    PreparedStatement findByStateProvinceStatement = null;
    List<Location> locationList = new ArrayList<Location>();
    Connection con = null;
    try {
      con = db.getConnection();
      findByStateProvinceStatement = con.prepareStatement(sql);
      findByStateProvinceStatement.setString(1, stateProvince);
      ResultSet results = findByStateProvinceStatement.executeQuery();
      while (results.next()) {
        locationList.add(LocationMapper.mapRow(results, 0));
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByStateProvinceStatement != null) {
          try {
            findByStateProvinceStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return locationList.stream();
  }

  public Optional<Location> jdbcReadLocation(long locationId, String loggedInUsername) {
    String sql =
        "select location.id, location.streetAddress as streetAddress ,location.postalCode as postalCode ,location.city as city ,location.stateProvince as stateProvince "
            + " from location location where location.id = ?";
    PreparedStatement findByIdStatement = null;
    Location location = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, locationId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        location = LocationMapper.mapRow(results, 0);
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

    return Optional.ofNullable(location);
  }

  public Optional<Location> jdbcAddLocation(Location location, String loggedInUsername) {
    String sql =
        "insert into location (streetAddress ,postalCode ,city ,stateProvince ) values(? ,? ,? ,? )";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

      insertStatement.setString(1, location.getStreetAddress());

      insertStatement.setString(2, location.getPostalCode());

      insertStatement.setString(3, location.getCity());

      insertStatement.setString(4, location.getStateProvince());

      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        location.setId(rs.getLong(1));
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
    return Optional.ofNullable(location);
  }

  public Optional<Location> jdbcUpdateLocation(Location location, String loggedInUsername) {
    String sql =
        "update location set (streetAddress=? ,postalCode=? ,city=? ,stateProvince=? ) where id=?";

    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);

      updateStatement.setString(1, location.getStreetAddress());

      updateStatement.setString(2, location.getPostalCode());

      updateStatement.setString(3, location.getCity());

      updateStatement.setString(4, location.getStateProvince());

      updateStatement.setLong(5, location.getId());
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
    return Optional.ofNullable(location);
  }

  public Optional<Location> jdbcSaveLocation(Location location, String loggedInUsername) {

    String sql =
        "call save_location(                           ?,?,?,?                                                   ?,?,?,?                                                   ?,?,?,?                                                   ?,                         )";
    CallableStatement saveLocationCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveLocationCall = con.prepareCall(sql);

      saveLocationCall.setString(0, location.getStreetAddress());

      saveLocationCall.setString(1, location.getPostalCode());

      saveLocationCall.setString(2, location.getCity());

      saveLocationCall.setString(3, location.getStateProvince());

      saveLocationCall.setString(5, loggedInUsername);
      saveLocationCall.registerOutParameter(6, Types.BIGINT);
      saveLocationCall.registerOutParameter(7, Types.BIGINT);
      saveLocationCall.registerOutParameter(8, Types.VARCHAR);
      saveLocationCall.execute();
      long ec = saveLocationCall.getLong(7);
      if (ec > 0) {
        throw new FFWException((String) saveLocationCall.getString(8));
      }
      id = saveLocationCall.getLong(6);
      location.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveLocationCall != null) {
          try {
            saveLocationCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(location);
  }

  public Optional<Location> jdbcDeleteLocation(long locationId, String loggedInUsername) {
    String sql =
        "delete from location where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    Location location = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, locationId);
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
    return Optional.ofNullable(location);
  }

  static class LocationMapper {
    public static Location mapRow(ResultSet rs, int rowNum) throws SQLException {
      Location location = new Location();
      location.setId(rs.getLong("id"));

      location.setStreetAddress(rs.getString("streetAddress"));

      location.setPostalCode(rs.getString("postalCode"));

      location.setCity(rs.getString("city"));

      location.setStateProvince(rs.getString("stateProvince"));

      return location;
    }
  }
}
