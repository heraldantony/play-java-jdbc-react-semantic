package v1.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import dao.JDBCEmployeeRepository;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;
import javax.inject.Inject;
import models.Employee;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;
import util.FFWError;
import util.SearchListOptions;

@With(RestApiAction.class)
public class EmployeeController extends Controller {

  @Inject HttpExecutionContext ec;
  @Inject JDBCEmployeeRepository handler;

  public CompletionStage<Result> find() {
    SearchListOptions searchOptions = SearchListOptions.searchOptions(request());
    return handler
        .find(searchOptions, "")
        .thenApplyAsync(
            list -> {
              final List<Employee> employeeList = list.collect(Collectors.toList());
              ObjectNode listWithDetails = Json.newObject();
              listWithDetails.put("limit", searchOptions.getLimit());
              listWithDetails.put("offset", searchOptions.getOffset());
              // listWithDetails.put("total", list.count());
              ObjectMapper mapper = new ObjectMapper();
              ArrayNode arrayEmployee = mapper.valueToTree(employeeList);
              listWithDetails.putArray("docs").addAll(arrayEmployee);
              // response().setHeader("X-Total-Count", ""+list.count());
              return ok(Json.toJson(listWithDetails));
            },
            ec.current());
  }

  public CompletionStage<Result> show(String id) {
    long idLong = Integer.parseInt(id);
    return handler
        .readEmployee(idLong, "")
        .thenApplyAsync(
            optionalSavedEmployee -> {
              return optionalSavedEmployee
                  .map(employee -> ok(Json.toJson(employee)))
                  .orElseGet(() -> notFound());
            },
            ec.current());
  }

  public CompletionStage<Result> update(String id) {
    long idLong = Integer.parseInt(id);
    JsonNode json = request().body().asJson();
    Employee employee = Json.fromJson(json, Employee.class);
    return handler
        .saveEmployee(employee, "")
        .thenApplyAsync(
            optionalSavedEmployee ->
                optionalSavedEmployee
                    .map(savedEmployee -> ok(Json.toJson(savedEmployee)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Employee"))),
            ec.current());
  }

  public CompletionStage<Result> create() {
    JsonNode json = request().body().asJson();
    final Employee employee = Json.fromJson(json, Employee.class);
    employee.setId(-1);
    return handler
        .saveEmployee(employee, "")
        .thenApplyAsync(
            optionalSavedEmployee ->
                optionalSavedEmployee
                    .map(savedEmployee -> ok(Json.toJson(savedEmployee)))
                    .orElseGet(() -> ok(FFWError.errorJson("Could not save Employee"))),
            ec.current());
  }
}
