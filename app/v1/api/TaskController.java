package v1.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import dao.JDBCTaskRepository;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import javax.inject.Inject;
import models.Task;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;
import util.FFWError;
import util.SearchListOptions;

@With(RestApiAction.class)
public class TaskController extends Controller {

  @Inject HttpExecutionContext ec;
  @Inject JDBCTaskRepository handler;

  public CompletionStage<Result> find() {
    SearchListOptions searchOptions = SearchListOptions.searchOptions(request());
    return handler
        .find(searchOptions, "")
        .thenApplyAsync(
            list -> {
              final List<Task> taskList = list.collect(Collectors.toList());
              ObjectNode listWithDetails = Json.newObject();
              listWithDetails.put("limit", searchOptions.getLimit());
              listWithDetails.put("offset", searchOptions.getOffset());
              // listWithDetails.put("total", list.count());
              ObjectMapper mapper = new ObjectMapper();
              ArrayNode arrayTask = mapper.valueToTree(taskList);
              listWithDetails.putArray("docs").addAll(arrayTask);
              // response().setHeader("X-Total-Count", ""+list.count());
              return ok(Json.toJson(listWithDetails));
            },
            ec.current());
  }

  public CompletionStage<Result> show(String id) {
    long idLong = Integer.parseInt(id);
    return handler
        .readTask(idLong, "")
        .thenApplyAsync(
            optionalSavedTask -> {
              return optionalSavedTask
                  .map(task -> ok(Json.toJson(task)))
                  .orElseGet(() -> notFound());
            },
            ec.current());
  }

  public CompletionStage<Result> update(String id) {
    long idLong = Integer.parseInt(id);
    JsonNode json = request().body().asJson();
    Task task = Json.fromJson(json, Task.class);
    return handler
        .saveTask(task, "")
        .thenApplyAsync(
            optionalSavedTask ->
                optionalSavedTask
                    .map(savedTask -> ok(Json.toJson(savedTask)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Task"))),
            ec.current());
  }

  public CompletionStage<Result> create() {
    JsonNode json = request().body().asJson();
    final Task task = Json.fromJson(json, Task.class);
    task.setId(-1);
    return handler
        .saveTask(task, "")
        .thenApplyAsync(
            optionalSavedTask ->
                optionalSavedTask
                    .map(savedTask -> ok(Json.toJson(savedTask)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Task"))),
            ec.current());
  }
}
