package CQPM.com.payload;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import CQPM.com.entity.Patient;

/**
 * @author Do Bao Khanh
 *
 */
public class UnitRequest {

	@NotBlank
	@Size(max = 40)
	@Valid
	private String name;

	@NotBlank
	@Size(max = 100)
	@Valid
	private String addrress;

	private List<Patient> patients;

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

}
