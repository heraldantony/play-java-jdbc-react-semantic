package v1.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import dao.JDBCRegionRepository;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import javax.inject.Inject;
import models.Region;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;
import util.FFWError;
import util.SearchListOptions;

@With(RestApiAction.class)
public class RegionController extends Controller {

  @Inject HttpExecutionContext ec;
  @Inject JDBCRegionRepository handler;

  public CompletionStage<Result> find() {
    SearchListOptions searchOptions = SearchListOptions.searchOptions(request());
    return handler
        .find(searchOptions, "")
        .thenApplyAsync(
            list -> {
              final List<Region> regionList = list.collect(Collectors.toList());
              ObjectNode listWithDetails = Json.newObject();
              listWithDetails.put("limit", searchOptions.getLimit());
              listWithDetails.put("offset", searchOptions.getOffset());
              // listWithDetails.put("total", list.count());
              ObjectMapper mapper = new ObjectMapper();
              ArrayNode arrayRegion = mapper.valueToTree(regionList);
              listWithDetails.putArray("docs").addAll(arrayRegion);
              // response().setHeader("X-Total-Count", ""+list.count());
              return ok(Json.toJson(listWithDetails));
            },
            ec.current());
  }

  public CompletionStage<Result> show(String id) {
    long idLong = Integer.parseInt(id);
    return handler
        .readRegion(idLong, "")
        .thenApplyAsync(
            optionalSavedRegion -> {
              return optionalSavedRegion
                  .map(region -> ok(Json.toJson(region)))
                  .orElseGet(() -> notFound());
            },
            ec.current());
  }

  public CompletionStage<Result> update(String id) {
    long idLong = Integer.parseInt(id);
    JsonNode json = request().body().asJson();
    Region region = Json.fromJson(json, Region.class);
    return handler
        .saveRegion(region, "")
        .thenApplyAsync(
            optionalSavedRegion ->
                optionalSavedRegion
                    .map(savedRegion -> ok(Json.toJson(savedRegion)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Region"))),
            ec.current());
  }

  public CompletionStage<Result> create() {
    JsonNode json = request().body().asJson();
    final Region region = Json.fromJson(json, Region.class);
    region.setId(-1);
    return handler
        .saveRegion(region, "")
        .thenApplyAsync(
            optionalSavedRegion ->
                optionalSavedRegion
                    .map(savedRegion -> ok(Json.toJson(savedRegion)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Region"))),
            ec.current());
  }
}
