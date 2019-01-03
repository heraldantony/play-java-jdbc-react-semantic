package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.Department;
import util.SearchListOptions;

public interface DepartmentRepository {

  public CompletionStage<Stream<Department>> find(
      SearchListOptions searchOptions, String loggedInUsername);

  public CompletionStage<Optional<Department>> findByDepartmentName(
      String departmentName, String loggedInUsername);

  public CompletionStage<Optional<Department>> readDepartment(
      long departmentId, String loggedInUsername);

  public CompletionStage<Optional<Department>> saveDepartment(
      Department department, String loggedInUsername);

  public CompletionStage<Optional<Department>> deleteDepartment(
      long departmentId, String loggedInUsername);
}
