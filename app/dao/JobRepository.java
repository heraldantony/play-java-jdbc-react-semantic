package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.Job;
import util.SearchListOptions;

public interface JobRepository {

  public CompletionStage<Stream<Job>> find(
      SearchListOptions searchOptions, String loggedInUsername);

  public CompletionStage<Optional<Job>> findByJobTitle(String jobTitle, String loggedInUsername);

  public CompletionStage<Optional<Job>> readJob(long jobId, String loggedInUsername);

  public CompletionStage<Optional<Job>> saveJob(Job job, String loggedInUsername);

  public CompletionStage<Optional<Job>> deleteJob(long jobId, String loggedInUsername);
}
