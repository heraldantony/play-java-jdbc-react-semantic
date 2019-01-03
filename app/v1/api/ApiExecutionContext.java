package v1.api;

import akka.actor.ActorSystem;
import play.libs.concurrent.CustomExecutionContext;

import javax.inject.Inject;

/**
 * Custom execution context wired to "database.threadpool" thread pool
 */
public class ApiExecutionContext extends CustomExecutionContext {
    

    private static final String name = "database.threadpool";

    @Inject
    public ApiExecutionContext(ActorSystem actorSystem) {
        super(actorSystem, name);
    }

   
}
