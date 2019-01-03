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
import models.Region;
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
public class JDBCRegionRepository implements RegionRepository {

  private static final Logger logger = Logger.getLogger(JDBCRegionRepository.class.getName());

  private final ApiExecutionContext ec;

  private Database db;

  @Inject
  public JDBCRegionRepository(Database db, ApiExecutionContext ec) {
    this.db = db;
    this.ec = ec;
  }

  public CompletionStage<Stream<Region>> find(
      SearchListOptions searchOptions, String loggedInUsername) {
    return supplyAsync(() -> jdbcFind(searchOptions, loggedInUsername), ec);
  }

  @Override
  public CompletionStage<Optional<Region>> findByRegionName(
      String regionName, String loggedInUsername) {

    return supplyAsync(() -> jdbcFindByRegionName(regionName, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Region>> readRegion(long regionId, String loggedInUsername) {
    return supplyAsync(() -> jdbcReadRegion(regionId, loggedInUsername), ec);
  }

  public CompletionStage<Optional<Region>> saveRegion(Region region, String loggedInUsername) {

    if (region.getId() != -1) {
      return supplyAsync(() -> jdbcUpdateRegion(region, loggedInUsername), ec);
    } else {
      return supplyAsync(() -> jdbcAddRegion(region, loggedInUsername), ec);
    }
  }

  public CompletionStage<Optional<Region>> deleteRegion(long regionId, String loggedInUsername) {
    return supplyAsync(() -> jdbcDeleteRegion(regionId, loggedInUsername), ec);
  }

  public Stream<Region> jdbcFind(SearchListOptions searchOptions, String loggedInUsername) {

    String sql = "select  region.id, region.regionName as regionName" + " from region region ";

    if (searchOptions.getSearchString() != null && searchOptions.getSearchString().trim() != "") {
      sql += " WHERE MATCH ( regionName) " + " AGAINST ('" + searchOptions.getSearchString() + "')";
    }

    sql += " limit " + searchOptions.getOffset() + ", " + searchOptions.getLimit();

    PreparedStatement findStatement = null;
    List<Region> regionList = new ArrayList<Region>();
    Connection con = null;
    try {
      con = db.getConnection();
      findStatement = con.prepareStatement(sql);
      ResultSet results = findStatement.executeQuery();
      while (results.next()) {
        regionList.add(RegionMapper.mapRow(results, 0));
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
    return regionList.stream();
  }

  public Optional<Region> jdbcFindByRegionName(String regionName, String loggedInUsername) {
    String sql =
        "select region.id, region.regionName as regionName"
            + " from region region where region.regionName = ?";
    PreparedStatement findByRegionNameStatement = null;
    Region regionObj = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByRegionNameStatement = con.prepareStatement(sql);
      findByRegionNameStatement.setString(1, regionName);
      ResultSet results = findByRegionNameStatement.executeQuery();
      while (results.next()) {
        regionObj = RegionMapper.mapRow(results, 0);
      }
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (findByRegionNameStatement != null) {
          try {
            findByRegionNameStatement.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(regionObj);
  }

  public Optional<Region> jdbcReadRegion(long regionId, String loggedInUsername) {
    String sql =
        "select region.id, region.regionName as regionName "
            + " from region region where region.id = ?";
    PreparedStatement findByIdStatement = null;
    Region region = null;
    Connection con = null;
    try {
      con = db.getConnection();
      findByIdStatement = con.prepareStatement(sql);
      findByIdStatement.setLong(1, regionId);
      ResultSet results = findByIdStatement.executeQuery();
      while (results.next()) {
        region = RegionMapper.mapRow(results, 0);
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

    return Optional.ofNullable(region);
  }

  public Optional<Region> jdbcAddRegion(Region region, String loggedInUsername) {
    String sql = "insert into region (regionName ) values(? )";
    PreparedStatement insertStatement = null;
    Connection con = null;
    try {
      con = db.getConnection();
      insertStatement = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);

      insertStatement.setString(1, region.getRegionName());

      insertStatement.executeUpdate();
      ResultSet rs = insertStatement.getGeneratedKeys();

      if (rs.next()) {
        region.setId(rs.getLong(1));
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
    return Optional.ofNullable(region);
  }

  public Optional<Region> jdbcUpdateRegion(Region region, String loggedInUsername) {
    String sql = "update region set (regionName=? ) where id=?";

    PreparedStatement updateStatement = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      updateStatement = con.prepareStatement(sql);

      updateStatement.setString(1, region.getRegionName());

      updateStatement.setLong(2, region.getId());
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
    return Optional.ofNullable(region);
  }

  public Optional<Region> jdbcSaveRegion(Region region, String loggedInUsername) {

    String sql = "call save_region(                           ?,                         )";
    CallableStatement saveRegionCall = null;
    Connection con = null;
    long id = -1;
    try {
      con = db.getConnection();
      saveRegionCall = con.prepareCall(sql);

      saveRegionCall.setString(0, region.getRegionName());

      saveRegionCall.setString(2, loggedInUsername);
      saveRegionCall.registerOutParameter(3, Types.BIGINT);
      saveRegionCall.registerOutParameter(4, Types.BIGINT);
      saveRegionCall.registerOutParameter(5, Types.VARCHAR);
      saveRegionCall.execute();
      long ec = saveRegionCall.getLong(4);
      if (ec > 0) {
        throw new FFWException((String) saveRegionCall.getString(5));
      }
      id = saveRegionCall.getLong(3);
      region.setId(id);
    } catch (SQLException e) {
      throw new FFWException(e.getMessage());
    } finally {
      if (con != null) {
        if (saveRegionCall != null) {
          try {
            saveRegionCall.close();
          } catch (SQLException pex) {

          }
        }
        try {
          con.close();
        } catch (SQLException cex) {

        }
      }
    }
    return Optional.ofNullable(region);
  }

  public Optional<Region> jdbcDeleteRegion(long regionId, String loggedInUsername) {
    String sql =
        "delete from region where id=? and "
            + " exists (select 1 from authorities where username=? and"
            + " authority='ROLE_DATA_ADMIN')";
    PreparedStatement deleteStatement = null;
    Region region = null;
    Connection con = null;
    try {
      con = db.getConnection();
      deleteStatement = con.prepareStatement(sql);
      deleteStatement.setLong(1, regionId);
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
    return Optional.ofNullable(region);
  }

  static class RegionMapper {
    public static Region mapRow(ResultSet rs, int rowNum) throws SQLException {
      Region region = new Region();
      region.setId(rs.getLong("id"));

      region.setRegionName(rs.getString("regionName"));

      return region;
    }
  }
}
