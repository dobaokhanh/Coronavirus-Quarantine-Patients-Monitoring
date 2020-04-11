package CQPM.com.payload;

import java.util.List;

import CQPM.com.entity.DailyCheck;

public class PatientResponse {

	private Long id;

	private String name;

	private String dob;

	private String address;

	private String email;

	private String phone;

	private List<DailyCheck> dailyChecks;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<DailyCheck> getDailyChecks() {
		return dailyChecks;
	}

	public void setDailyChecks(List<DailyCheck> dailyChecks) {
		this.dailyChecks = dailyChecks;
	}

}
