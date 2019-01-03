package util;


import com.fasterxml.jackson.databind.node.ObjectNode;

import play.libs.Json;

public class FFWError {
	public static ObjectNode errorJson(String message) {
		ObjectNode e=Json.newObject();
		e.put("error", true);
		e.put("status", "failure");
		e.put("message", message);
		return e;
	}
}
