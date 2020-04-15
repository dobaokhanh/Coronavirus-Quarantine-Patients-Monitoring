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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;

/**
 * @author Do Bao Khanh
 *
 */
@Entity
@Table(name = "units", uniqueConstraints = @UniqueConstraint(columnNames = { "name" }))
public class Unit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@NotBlank
	@NaturalId
	@Size(max = 40)
	@Column(name = "name")
	private String name;

	@NotBlank
	@Size(max = 100)
	@Column(name = "address")
	private String addrress;

	@OneToMany(mappedBy = "unit", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
	private List<Patient> patients = new ArrayList<>();

	public Unit() {
		super();
	}

	public Unit(Long id, @NotBlank @Size(max = 40) String name, @NotBlank @Size(max = 100) String addrress,
			List<Patient> patients) {
		super();
		this.id = id;
		this.name = name;
		this.addrress = addrress;
		this.patients = patients;
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

	public String getAddrress() {
		return addrress;
	}

	public void setAddrress(String addrress) {
		this.addrress = addrress;
	}

	public List<Patient> getPatients() {
		return patients;
	}

	public void setPatients(List<Patient> patients) {
		this.patients = patients;
	}

	public void addPatient(Patient patient) {
		patients.add(patient);
		patient.setUnit(this);
	}

	public void removePatient(Patient patient) {
		patients.remove(patient);
		patient.setUnit(null);
	}
}
