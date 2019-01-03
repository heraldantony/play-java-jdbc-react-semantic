package v1.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import dao.JDBCCountryRepository;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import javax.inject.Inject;
import models.Country;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;
import util.FFWError;
import util.SearchListOptions;

@With(RestApiAction.class)
public class CountryController extends Controller {

  @Inject HttpExecutionContext ec;
  @Inject JDBCCountryRepository handler;

  public CompletionStage<Result> find() {
    SearchListOptions searchOptions = SearchListOptions.searchOptions(request());
    return handler
        .find(searchOptions, "")
        .thenApplyAsync(
            list -> {
              final List<Country> countryList = list.collect(Collectors.toList());
              ObjectNode listWithDetails = Json.newObject();
              listWithDetails.put("limit", searchOptions.getLimit());
              listWithDetails.put("offset", searchOptions.getOffset());
              // listWithDetails.put("total", list.count());
              ObjectMapper mapper = new ObjectMapper();
              ArrayNode arrayCountry = mapper.valueToTree(countryList);
              listWithDetails.putArray("docs").addAll(arrayCountry);
              // response().setHeader("X-Total-Count", ""+list.count());
              return ok(Json.toJson(listWithDetails));
            },
            ec.current());
  }

  public CompletionStage<Result> show(String id) {
    long idLong = Integer.parseInt(id);
    return handler
        .readCountry(idLong, "")
        .thenApplyAsync(
            optionalSavedCountry -> {
              return optionalSavedCountry
                  .map(country -> ok(Json.toJson(country)))
                  .orElseGet(() -> notFound());
            },
            ec.current());
  }

  public CompletionStage<Result> update(String id) {
    long idLong = Integer.parseInt(id);
    JsonNode json = request().body().asJson();
    Country country = Json.fromJson(json, Country.class);
    return handler
        .saveCountry(country, "")
        .thenApplyAsync(
            optionalSavedCountry ->
                optionalSavedCountry
                    .map(savedCountry -> ok(Json.toJson(savedCountry)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Country"))),
            ec.current());
  }

  public CompletionStage<Result> create() {
    JsonNode json = request().body().asJson();
    final Country country = Json.fromJson(json, Country.class);
    country.setId(-1);
    return handler
        .saveCountry(country, "")
        .thenApplyAsync(
            optionalSavedCountry ->
                optionalSavedCountry
                    .map(savedCountry -> ok(Json.toJson(savedCountry)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Country"))),
            ec.current());
  }
}
