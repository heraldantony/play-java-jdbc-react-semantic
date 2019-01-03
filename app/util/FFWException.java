package util;

public class FFWException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1234567890L;

	private String message;
	public FFWException(String message) {
		this.message=message;
	}
	public String getMessage() {
		return message;
	}
}