package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.Employee;
import util.SearchListOptions;

public interface EmployeeRepository {

  public CompletionStage<Stream<Employee>> find(
      SearchListOptions searchOptions, String loggedInUsername);

  public CompletionStage<Optional<Employee>> findByFirstName(
      String firstName, String loggedInUsername);

  public CompletionStage<Stream<Employee>> findByLastName(String lastName, String loggedInUsername);

  public CompletionStage<Stream<Employee>> findByEmail(String email, String loggedInUsername);

  public CompletionStage<Stream<Employee>> findByPhoneNumber(
      String phoneNumber, String loggedInUsername);

  public CompletionStage<Optional<Employee>> readEmployee(long employeeId, String loggedInUsername);

  public CompletionStage<Optional<Employee>> saveEmployee(
      Employee employee, String loggedInUsername);

  public CompletionStage<Optional<Employee>> deleteEmployee(
      long employeeId, String loggedInUsername);
}
