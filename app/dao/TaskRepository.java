package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.Task;
import util.SearchListOptions;

public interface TaskRepository {

  public CompletionStage<Stream<Task>> find(
      SearchListOptions searchOptions, String loggedInUsername);

  public CompletionStage<Optional<Task>> findByTitle(String title, String loggedInUsername);

  public CompletionStage<Stream<Task>> findByDescription(
      String description, String loggedInUsername);

  public CompletionStage<Optional<Task>> readTask(long taskId, String loggedInUsername);

  public CompletionStage<Optional<Task>> saveTask(Task task, String loggedInUsername);

  public CompletionStage<Optional<Task>> deleteTask(long taskId, String loggedInUsername);
}
