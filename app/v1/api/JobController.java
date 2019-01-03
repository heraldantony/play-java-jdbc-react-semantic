package v1.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import dao.JDBCJobRepository;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import javax.inject.Inject;
import models.Job;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;
import util.FFWError;
import util.SearchListOptions;

@With(RestApiAction.class)
public class JobController extends Controller {

  @Inject HttpExecutionContext ec;
  @Inject JDBCJobRepository handler;

  public CompletionStage<Result> find() {
    SearchListOptions searchOptions = SearchListOptions.searchOptions(request());
    return handler
        .find(searchOptions, "")
        .thenApplyAsync(
            list -> {
              final List<Job> jobList = list.collect(Collectors.toList());
              ObjectNode listWithDetails = Json.newObject();
              listWithDetails.put("limit", searchOptions.getLimit());
              listWithDetails.put("offset", searchOptions.getOffset());
              // listWithDetails.put("total", list.count());
              ObjectMapper mapper = new ObjectMapper();
              ArrayNode arrayJob = mapper.valueToTree(jobList);
              listWithDetails.putArray("docs").addAll(arrayJob);
              // response().setHeader("X-Total-Count", ""+list.count());
              return ok(Json.toJson(listWithDetails));
            },
            ec.current());
  }

  public CompletionStage<Result> show(String id) {
    long idLong = Integer.parseInt(id);
    return handler
        .readJob(idLong, "")
        .thenApplyAsync(
            optionalSavedJob -> {
              return optionalSavedJob.map(job -> ok(Json.toJson(job))).orElseGet(() -> notFound());
            },
            ec.current());
  }

  public CompletionStage<Result> update(String id) {
    long idLong = Integer.parseInt(id);
    JsonNode json = request().body().asJson();
    Job job = Json.fromJson(json, Job.class);
    return handler
        .saveJob(job, "")
        .thenApplyAsync(
            optionalSavedJob ->
                optionalSavedJob
                    .map(savedJob -> ok(Json.toJson(savedJob)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Job"))),
            ec.current());
  }

  public CompletionStage<Result> create() {
    JsonNode json = request().body().asJson();
    final Job job = Json.fromJson(json, Job.class);
    job.setId(-1);
    return handler
        .saveJob(job, "")
        .thenApplyAsync(
            optionalSavedJob ->
                optionalSavedJob
                    .map(savedJob -> ok(Json.toJson(savedJob)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Job"))),
            ec.current());
  }
}
