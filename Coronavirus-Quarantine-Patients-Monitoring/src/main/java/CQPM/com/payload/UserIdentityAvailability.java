package CQPM.com.payload;

/**
 * @author Do Bao Khanh
 *
 */
public class UserIdentityAvailability {

	private Boolean available;

	public UserIdentityAvailability(Boolean available) {
		super();
		this.available = available;
	}

	public Boolean getAvailable() {
		return available;
	}

	public void setAvailable(Boolean available) {
		this.available = available;
	}

}
