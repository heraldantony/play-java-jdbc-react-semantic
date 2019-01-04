package controllers;

import dao.JDBCUserRepository;
import java.util.logging.Logger;
import javax.inject.Inject;
import play.mvc.Http.Context;
import play.mvc.Result;
import play.mvc.Security;

public class Secured extends Security.Authenticator {
  private static final Logger logger = Logger.getLogger(Secured.class.getName());

  @Inject JDBCUserRepository handler;

  @Override
  public String getUsername(Context ctx) {
    /*
    String[] authTokenHeaderValues = ctx.request().headers().get(SecurityController.AUTH_TOKEN_HEADER);


    if ((authTokenHeaderValues != null) && (authTokenHeaderValues.length == 1) && (authTokenHeaderValues[0] != null)) {
        User user = handler.findByAuthTokenSync(authTokenHeaderValues[0], "");
        if (user != null) {
            ctx.args.put("user", user);
            return user.getUsername();
        }
    }
    */
    String token = getToken(ctx);
    /*  	if(token != null) {
    	User user = handler.findByAuthTokenSync(token, "");
           if (user != null) {
               ctx.args.put("user", user);
               return user.getUsername();
           }
    } */

    return null;
  }

  public String getToken(Context ctx) {

    // TODO use cookie, until the HttpInterceptor is fixed on the front-end
    String[] cookies = ctx.request().headers().get(SecurityController.COOKIE);
    String cookie = (cookies != null && cookies.length > 0) ? cookies[0] : "";
    logger.info("cookie =" + cookie);
    if (cookie != null && cookie.trim().length() > 0 && cookie.startsWith("authToken")) {
      int s = cookie.indexOf("authToken");
      int e = cookie.indexOf(";", s + 10);
      if (e == -1 || e < s) e = cookie.length();
      logger.info("Auth token =" + cookie.substring(s + 10, e));
      return cookie.substring(s + 10, e);
    }
    String[] bearerTokens = ctx.request().headers().get(SecurityController.AUTHORIZATION_HEADER);
    String bearerToken = (bearerTokens != null && bearerTokens.length > 0) ? bearerTokens[0] : "";
    if (bearerToken != null
        && bearerToken.trim().length() > 0
        && bearerToken.startsWith("Bearer ")) {
      return bearerToken.substring(7, bearerToken.length());
    }
    String[] jwts = ctx.request().headers().get(SecurityController.AUTHORIZATION_TOKEN);
    String jwt = (jwts != null && jwts.length > 0) ? jwts[0] : "";
    if (jwt != null && jwt.trim().length() > 0) {
      return jwt;
    }
    String[] authTokenHeaderValues =
        ctx.request().headers().get(SecurityController.AUTH_TOKEN_HEADER);

    if ((authTokenHeaderValues != null)
        && (authTokenHeaderValues.length == 1)
        && (authTokenHeaderValues[0] != null)) {
      return authTokenHeaderValues[0];
    }
    return null;
  }

  @Override
  public Result onUnauthorized(Context ctx) {
    return unauthorized();
  }
}
