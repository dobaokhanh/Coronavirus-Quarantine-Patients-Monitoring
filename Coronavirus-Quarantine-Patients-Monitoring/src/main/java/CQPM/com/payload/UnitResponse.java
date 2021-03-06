package CQPM.com.payload;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * @author Do Bao Khanh
 *
 */
public class UnitResponse {

	private Long id;

	private String name;

	private String address;

	private List<PatientResponse> patients;

	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Long noOfPatients;

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

	public String getAddress() {
		return address;
	}

	public void setAddress(String addrress) {
		this.address = addrress;
	}

	public List<PatientResponse> getPatients() {
		return patients;
	}

	public void setPatients(List<PatientResponse> patients) {
		this.patients = patients;
	}

	public Long getNoOfPatients() {
		return noOfPatients;
	}

	public void setNoOfPatients(Long noOfPatients) {
		this.noOfPatients = noOfPatients;
	}

}
