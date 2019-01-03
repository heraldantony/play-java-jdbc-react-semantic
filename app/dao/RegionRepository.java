package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.Region;
import util.SearchListOptions;

public interface RegionRepository {

  public CompletionStage<Stream<Region>> find(
      SearchListOptions searchOptions, String loggedInUsername);

  public CompletionStage<Optional<Region>> findByRegionName(
      String regionName, String loggedInUsername);

  public CompletionStage<Optional<Region>> readRegion(long regionId, String loggedInUsername);

  public CompletionStage<Optional<Region>> saveRegion(Region region, String loggedInUsername);

  public CompletionStage<Optional<Region>> deleteRegion(long regionId, String loggedInUsername);
}
