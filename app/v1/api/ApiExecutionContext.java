package v1.api;

import akka.actor.ActorSystem;
import javax.inject.Inject;
import play.libs.concurrent.CustomExecutionContext;

/** Custom execution context wired to "database.threadpool" thread pool */
public class ApiExecutionContext extends CustomExecutionContext {

  private static final String name = "database.threadpool";

  @Inject
  public ApiExecutionContext(ActorSystem actorSystem) {
    super(actorSystem, name);
  }
}
