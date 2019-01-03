package controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.JsonNode;

import dao.JDBCUserRepository;
import models.User;
import play.data.Form;
import play.data.FormFactory;
import play.data.validation.Constraints;
import play.libs.Json;
import play.mvc.*;
import util.FFWError;
import play.libs.concurrent.HttpExecutionContext;
import java.util.logging.Logger;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.CompletableFuture;
import static java.util.concurrent.CompletableFuture.supplyAsync;

import java.util.Optional;

import v1.api.ApiExecutionContext;
import play.libs.concurrent.HttpExecution;

import javax.inject.Inject;
import java.util.concurrent.Executor;

public class SecurityController extends Controller {

	@Inject
	FormFactory formFactory;
	@Inject
	JDBCUserRepository handler;
	@Inject
	HttpExecutionContext ec;

	private static final Logger logger = Logger.getLogger(SecurityController.class.getName());

	public final static String AUTH_TOKEN_HEADER = "X-AUTH-TOKEN";
	public static final String AUTH_TOKEN = "authToken";
	public static final String COOKIE = "Cookie";
	public static final String AUTHORIZATION_HEADER = "Authorization";

	public static final String AUTHORIZATION_TOKEN = "access_token";

	public static User getUser() {
		return (User) Http.Context.current().args.get("user");
	}

	// returns an authToken
	public CompletionStage<Result> login() {
		JsonNode json = request().body().asJson();
		if (json == null) {
			return CompletableFuture.completedFuture(badRequest("No login data"));
		}
		String username = json.findPath("username").textValue();
		String password = json.findPath("password").textValue();

		if (username == null) {
			return CompletableFuture.completedFuture(badRequest("Missing parameter username"));
		} else if (password == null) {
			return CompletableFuture.completedFuture(badRequest("Missing parameter password"));
		}

		CompletableFuture.supplyAsync(() -> "Hello").thenCompose(s -> CompletableFuture.supplyAsync(() -> s + "World"));

		return handler.findByUsernameAndPassword(username, password).thenComposeAsync(optionalUser -> {
			return optionalUser.map(user -> {
				return handler.createToken(username).thenApplyAsync(authToken -> {
					
					ObjectNode authTokenJson = Json.newObject();
					authTokenJson.put(AUTH_TOKEN, authToken);
					response().setCookie(
							Http.Cookie.builder(AUTH_TOKEN, authToken).withSecure(ctx().request().secure()).build());
					return  ok(authTokenJson);
				}, ec.current());
				
			}).orElseGet(() -> {
				ObjectNode res = FFWError.errorJson("Invalid credentials");
				//return CompletableFuture.supplyAsync(() -> ok(res));
				// unauthorized();
				 return CompletableFuture.completedFuture(ok(res));
			});
		}, ec.current());

	}

	public CompletionStage<Result> loginCheck(Optional<User> optionalUser, String username) {
		return optionalUser.map(user -> {
			ObjectNode res = Json.newObject();
			res.put("error", true);
			res.put("message", "Invalid credentials");
			//return CompletableFuture.supplyAsync(() -> ok(res));
			// unauthorized();
			 return CompletableFuture.completedFuture(ok(res));
		}).orElseGet(() -> {
			return (CompletableFuture<Result>) createToken(username);
		});
		/* return optionalUser.map(user -> {
			ObjectNode res = Json.newObject();
			res.put("error", true);
			res.put("message", "Invalid credentials");
			//return CompletableFuture.supplyAsync(() -> ok(res));
			// unauthorized();
			 return CompletableFuture.completedFuture(ok(res));
		}).orElseGet(() -> {
			return CompletableFuture.completedFuture(ok(Json.newObject()));
			//return CompletableFuture.supplyAsync(() -> {
//			return handler.createToken(username).thenComposeAsync(authToken -> {
//
//				ObjectNode authTokenJson = Json.newObject();
//				authTokenJson.put(AUTH_TOKEN, authToken);
//				response().setCookie(
//						Http.Cookie.builder(AUTH_TOKEN, authToken).withSecure(ctx().request().secure()).build());
//				return  CompletableFuture.completedFuture(ok(authTokenJson));
//			}, ec.current());
			}); */

		//});
	}
	public CompletionStage<Result> createToken(String username) {
		return handler.createToken(username).thenApplyAsync(authToken -> {
			
			ObjectNode authTokenJson = Json.newObject();
			authTokenJson.put(AUTH_TOKEN, authToken);
			response().setCookie(
					Http.Cookie.builder(AUTH_TOKEN, authToken).withSecure(ctx().request().secure()).build());
			return  ok(authTokenJson);
		}, ec.current());
		
	}
	public CompletionStage<Result> signup() {
		JsonNode json = request().body().asJson();
		if (json == null) {
			return CompletableFuture.completedFuture(badRequest("No signup data"));
		}
		User user = Json.fromJson(json, User.class);

		if (user.getUsername() == null) {
			return CompletableFuture.completedFuture(badRequest("Missing parameter username"));
		} else if (user.getPassword() == null) {
			return CompletableFuture.completedFuture(badRequest("Missing parameter password"));
		}

		return handler.findByUsername(user.getUsername(), "").thenComposeAsync(optionalUser -> {
			return optionalUser.map(tmpuser -> {
				
				return CompletableFuture.completedFuture(ok(FFWError.errorJson("User with that username is already registered")));

			}).orElseGet(() -> {
				// return CompletableFuture.supplyAsync(() -> ok(Json.newObject()));
				return  (CompletableFuture<Result>) handler.saveUser(user, "").thenApplyAsync(optionalSavedUser -> 
				optionalSavedUser.map(savedUser -> ok(Json.toJson(savedUser)))
					.orElseGet(()-> ok(FFWError.errorJson("Could not save user"))),
				 ec.current());
				
			});
			
			/*  return optionalUser.map(existingUser -> {
			 
			  //return unauthorized(); ObjectNode res = Json.newObject(); res.put("error",
			  true); res.put("message", "User with that username is already registered");
			  return CompletableFuture.completedFuture(ok(res)); }).orElseGet(() -> {
			  //return CompletableFuture.completedFuture(ok(Json.newObject())); return
			  handler .saveUser(user, "") .thenApplyAsync( optionalResource -> { return
			  notFound(); //return optionalResource.map(r ->
			  ok(Json.toJson(r))).orElseGet(() -> notFound()); }, ctx); }); */
			 

		});
	}
	
	@Security.Authenticated(Secured.class)
	public CompletionStage<Result> logout() {
		User user = getUser();
		response().discardCookie(AUTH_TOKEN);
		return handler.deleteToken(user.getUsername(), user.getToken()).thenApplyAsync((token) -> {
			return redirect("/");
		}, ec.current());
	}

	@Security.Authenticated(Secured.class)
	public Result account() {
		User user = getUser();
		logger.info("user is null?" + (user == null));
		logger.info("username = " + user.getUsername());
		ObjectNode userJson = Json.newObject();
		userJson.put("username", user.getUsername());
		ObjectMapper mapper = new ObjectMapper();
		ArrayNode authorities = (ArrayNode) mapper.valueToTree(user.getAuthorities());
		userJson.putArray("authorities").addAll(authorities);

		return ok(userJson);
	}

	public static class Login {

		@Constraints.Required
		public String username;

		@Constraints.Required
		public String password;

		public String token; // use token from client if specified

	}

}
