package v1.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import dao.JDBCLocationRepository;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import javax.inject.Inject;
import models.Location;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;
import util.FFWError;
import util.SearchListOptions;

@With(RestApiAction.class)
public class LocationController extends Controller {

  @Inject HttpExecutionContext ec;
  @Inject JDBCLocationRepository handler;

  public CompletionStage<Result> find() {
    SearchListOptions searchOptions = SearchListOptions.searchOptions(request());
    return handler
        .find(searchOptions, "")
        .thenApplyAsync(
            list -> {
              final List<Location> locationList = list.collect(Collectors.toList());
              ObjectNode listWithDetails = Json.newObject();
              listWithDetails.put("limit", searchOptions.getLimit());
              listWithDetails.put("offset", searchOptions.getOffset());
              // listWithDetails.put("total", list.count());
              ObjectMapper mapper = new ObjectMapper();
              ArrayNode arrayLocation = mapper.valueToTree(locationList);
              listWithDetails.putArray("docs").addAll(arrayLocation);
              // response().setHeader("X-Total-Count", ""+list.count());
              return ok(Json.toJson(listWithDetails));
            },
            ec.current());
  }

  public CompletionStage<Result> show(String id) {
    long idLong = Integer.parseInt(id);
    return handler
        .readLocation(idLong, "")
        .thenApplyAsync(
            optionalSavedLocation -> {
              return optionalSavedLocation
                  .map(location -> ok(Json.toJson(location)))
                  .orElseGet(() -> notFound());
            },
            ec.current());
  }

  public CompletionStage<Result> update(String id) {
    long idLong = Integer.parseInt(id);
    JsonNode json = request().body().asJson();
    Location location = Json.fromJson(json, Location.class);
    return handler
        .saveLocation(location, "")
        .thenApplyAsync(
            optionalSavedLocation ->
                optionalSavedLocation
                    .map(savedLocation -> ok(Json.toJson(savedLocation)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Location"))),
            ec.current());
  }

  public CompletionStage<Result> create() {
    JsonNode json = request().body().asJson();
    final Location location = Json.fromJson(json, Location.class);
    location.setId(-1);
    return handler
        .saveLocation(location, "")
        .thenApplyAsync(
            optionalSavedLocation ->
                optionalSavedLocation
                    .map(savedLocation -> ok(Json.toJson(savedLocation)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Location"))),
            ec.current());
  }
}
