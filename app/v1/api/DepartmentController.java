package v1.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import dao.JDBCDepartmentRepository;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import javax.inject.Inject;
import models.Department;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;
import util.FFWError;
import util.SearchListOptions;

@With(RestApiAction.class)
public class DepartmentController extends Controller {

  @Inject HttpExecutionContext ec;
  @Inject JDBCDepartmentRepository handler;

  public CompletionStage<Result> find() {
    SearchListOptions searchOptions = SearchListOptions.searchOptions(request());
    return handler
        .find(searchOptions, "")
        .thenApplyAsync(
            list -> {
              final List<Department> departmentList = list.collect(Collectors.toList());
              ObjectNode listWithDetails = Json.newObject();
              listWithDetails.put("limit", searchOptions.getLimit());
              listWithDetails.put("offset", searchOptions.getOffset());
              // listWithDetails.put("total", list.count());
              ObjectMapper mapper = new ObjectMapper();
              ArrayNode arrayDepartment = mapper.valueToTree(departmentList);
              listWithDetails.putArray("docs").addAll(arrayDepartment);
              // response().setHeader("X-Total-Count", ""+list.count());
              return ok(Json.toJson(listWithDetails));
            },
            ec.current());
  }

  public CompletionStage<Result> show(String id) {
    long idLong = Integer.parseInt(id);
    return handler
        .readDepartment(idLong, "")
        .thenApplyAsync(
            optionalSavedDepartment -> {
              return optionalSavedDepartment
                  .map(department -> ok(Json.toJson(department)))
                  .orElseGet(() -> notFound());
            },
            ec.current());
  }

  public CompletionStage<Result> update(String id) {
    long idLong = Integer.parseInt(id);
    JsonNode json = request().body().asJson();
    Department department = Json.fromJson(json, Department.class);
    return handler
        .saveDepartment(department, "")
        .thenApplyAsync(
            optionalSavedDepartment ->
                optionalSavedDepartment
                    .map(savedDepartment -> ok(Json.toJson(savedDepartment)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Department"))),
            ec.current());
  }

  public CompletionStage<Result> create() {
    JsonNode json = request().body().asJson();
    final Department department = Json.fromJson(json, Department.class);
    department.setId(-1);
    return handler
        .saveDepartment(department, "")
        .thenApplyAsync(
            optionalSavedDepartment ->
                optionalSavedDepartment
                    .map(savedDepartment -> ok(Json.toJson(savedDepartment)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Department"))),
            ec.current());
  }
}
