package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.Country;
import util.SearchListOptions;

public interface CountryRepository {

  public CompletionStage<Stream<Country>> find(
      SearchListOptions searchOptions, String loggedInUsername);

  public CompletionStage<Optional<Country>> findByCountryName(
      String countryName, String loggedInUsername);

  public CompletionStage<Optional<Country>> readCountry(long countryId, String loggedInUsername);

  public CompletionStage<Optional<Country>> saveCountry(Country country, String loggedInUsername);

  public CompletionStage<Optional<Country>> deleteCountry(long countryId, String loggedInUsername);
}
