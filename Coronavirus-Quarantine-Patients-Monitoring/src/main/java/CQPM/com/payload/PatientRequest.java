package CQPM.com.payload;

import javax.persistence.Column;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

/**
 * @author Do Bao Khanh
 *
 */
public class PatientRequest {

	@NotBlank
	@Size(min = 3, max = 40)
	@Valid
	private String name;

	@NotBlank
	private String dob;

	@NotBlank
	@Size(max = 100, min = 4)
	private String address;

	@NotBlank
	@Size(min = 4, max = 40)
	@Email
	@Valid
	private String email;

	@NotBlank
	@Size(min = 6, max = 20)
	@Pattern(regexp = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$", message = "wrong format")
	@Column(name = "phone")
	private String phone;

	private Long unitId;

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

	public Long getUnitId() {
		return unitId;
	}

	public void setUnitId(Long unitId) {
		this.unitId = unitId;
	}

}
