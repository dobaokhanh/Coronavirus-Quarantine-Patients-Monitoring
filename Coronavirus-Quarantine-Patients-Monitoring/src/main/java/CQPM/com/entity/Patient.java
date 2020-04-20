package CQPM.com.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;

/**
 * @author Do Bao Khanh
 *
 */
@Entity
@Table(name = "patients", uniqueConstraints = { @UniqueConstraint(columnNames = { "email" }),
		@UniqueConstraint(columnNames = { "phone" }) })
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@NaturalId
	@NotBlank
	@Size(min = 3, max = 40)
	@Column(name = "name")
	private String name;

	@NotBlank
	@Column(name = "dob")
	private String dob;

	@NotBlank
	@Size(min = 5, max = 100)
	@Column(name = "address")
	private String address;

	@NotBlank
	@Size(min = 4, max = 40)
	@Email
	@Column(name = "email")
	private String email;

	@NotBlank
	@Size(min = 6, max = 20)
	@Pattern(regexp = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$", message = "wrong format")
	@Column(name = "phone")
	private String phone;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "patient_id")
	private List<DailyCheck> dailyCheck;

	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "unit_id", nullable = false)
	private Unit unit;

	public Patient() {
		super();
	}

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

	public List<DailyCheck> getDailyCheck() {
		return dailyCheck;
	}

	public void setDailyCheck(List<DailyCheck> dailyCheck) {
		this.dailyCheck = dailyCheck;
	}

	public Unit getUnit() {
		return unit;
	}

	public void setUnit(Unit unit) {
		this.unit = unit;
	}

	public void addDailyCheck(DailyCheck day) {
		if (dailyCheck == null) {
			dailyCheck = new ArrayList<>();
		}
		dailyCheck.add(day);
	}

	public void removeDailyCheck(DailyCheck day) {
		dailyCheck.remove(day);
	}
}
