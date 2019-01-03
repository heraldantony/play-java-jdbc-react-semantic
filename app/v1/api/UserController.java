package v1.api;

import com.fasterxml.jackson.databind.JsonNode;

import dao.JDBCUserRepository;
import models.User;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.*;

import javax.inject.Inject;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@With(ApiAction.class)
public class UserController extends Controller {
	private static final Logger logger =
        	Logger.getLogger(UserController.class.getName());

    private HttpExecutionContext ec;
    private JDBCUserRepository handler;

    @Inject
    public UserController(HttpExecutionContext ec, JDBCUserRepository handler) {
        this.ec = ec;
        this.handler = handler;
    }

    public CompletionStage<Result> find() {
        return handler.find( "").thenApplyAsync( list -> {
            final List<User> userList = list.collect(Collectors.toList());
            return ok(Json.toJson(userList));
        }, ec.current());
   }

    public CompletionStage<Result> findByUsername(String username) {
   return handler.findByUsername(username, "").thenApplyAsync(user -> {
            return ok(Json.toJson(user));
        }, ec.current());
   
   }

    public CompletionStage<Result> show(String id) {
    	long idLong=Integer.parseInt(id);
        return handler.readUser(idLong,"").thenApplyAsync(optionalResource -> {
            return optionalResource.map(resource ->
                ok(Json.toJson(resource))
            ).orElseGet(() ->
                notFound()
            );
        }, ec.current());
    }

    public CompletionStage<Result> update(String id) {
    	long idLong=Integer.parseInt(id);
        JsonNode json = request().body().asJson();
        User resource = Json.fromJson(json, User.class);
        return handler.saveUser(resource, "").thenApplyAsync(optionalResource -> {
            return optionalResource.map(r ->
                    ok(Json.toJson(r))
            ).orElseGet(() ->
                    notFound()
            );
        }, ec.current());
    }

    public CompletionStage<Result> create() {
        JsonNode json = request().body().asJson();
        final User resource = Json.fromJson(json, User.class);
        resource.setId(-1);
        return handler.saveUser(resource, "").thenApplyAsync(savedResource -> {
            return created(Json.toJson(savedResource));
        }, ec.current());
    }
}

