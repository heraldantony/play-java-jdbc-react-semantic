package util;

import play.mvc.Http.Request;

public class SearchListOptions {
	String search;
	int limit;
	int offset;

	public SearchListOptions(Request request) {
		limit = request.getQueryString("limit") != null ? Integer.parseInt(request.getQueryString("limit"))
				: FFWConstants.PAGESIZE;
		int page = request.getQueryString("page") != null ? Integer.parseInt(request.getQueryString("page")) : 1;
		offset = page > 0 ? (page - 1) * limit : 0;
		search = request.getQueryString("search") != null ? request.getQueryString("search"):"";
	}

	public static SearchListOptions searchOptions(Request request) {
		return new SearchListOptions(request);
	}

	public int getLimit() {
		return limit;
	}

	public int getOffset() {
		return offset;
	}
	public String getSearchString() {
		return search;
	}
}
