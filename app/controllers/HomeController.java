package controllers;

import play.mvc.*;

import views.html.*;
import play.Application;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index(String path) {
       // return ok(index.render("Your new application is ready."));
    	//return index();
    	return ok(views.html.index.render());
    }

    public Result options(String path) {
    	return ok("").withHeader("Access-Control-Allow-Origin","*")
    			.withHeader(
    		    "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    		    .withHeader("Access-Control-Allow-Headers","Accept, Origin, Content-type, X-Json, X-Prototype-Version, X-Requested-With")
    		    .withHeader("Access-Control-Allow-Credentials","true")
    		    .withHeader("Access-Control-Max-Age", (60 * 60 * 24)+"");
     }

    public  Result matchAll(String path) {
    	return index("");
    }

    public Result views(String path) {
    	return redirect("/index.html?loc="+path);
    }
}
