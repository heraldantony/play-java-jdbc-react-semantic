package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.Location;
import util.SearchListOptions;

public interface LocationRepository {

  public CompletionStage<Stream<Location>> find(
      SearchListOptions searchOptions, String loggedInUsername);

  public CompletionStage<Optional<Location>> findByStreetAddress(
      String streetAddress, String loggedInUsername);

  public CompletionStage<Stream<Location>> findByPostalCode(
      String postalCode, String loggedInUsername);

  public CompletionStage<Stream<Location>> findByCity(String city, String loggedInUsername);

  public CompletionStage<Stream<Location>> findByStateProvince(
      String stateProvince, String loggedInUsername);

  public CompletionStage<Optional<Location>> readLocation(long locationId, String loggedInUsername);

  public CompletionStage<Optional<Location>> saveLocation(
      Location location, String loggedInUsername);

  public CompletionStage<Optional<Location>> deleteLocation(
      long locationId, String loggedInUsername);
}
