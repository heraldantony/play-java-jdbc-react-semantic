package dao;

import java.util.Optional;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;
import models.User;

public interface UserRepository {

  public CompletionStage<Stream<User>> find(String loggedInUsername);

  public CompletionStage<Optional<User>> findByUsername(String username, String loggedInUsername);

  public CompletionStage<Optional<User>> findByUsernameAndPassword(
      String username, String password);

  public CompletionStage<Optional<User>> findByAuthToken(String token, String loggedInUsername);

  public CompletionStage<String> createToken(String username);

  public CompletionStage<String> deleteToken(String username, String token);

  public CompletionStage<Optional<User>> readUser(long userId, String loggedInUsername);

  public CompletionStage<Optional<User>> saveUser(User user, String loggedInUsername);

  public CompletionStage<Optional<User>> deleteUser(long userId, String loggedInUsername);
}
