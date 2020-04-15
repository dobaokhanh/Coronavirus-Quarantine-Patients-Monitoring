package CQPM.com.util;

import java.util.List;
import java.util.stream.Collectors;

import CQPM.com.entity.Patient;
import CQPM.com.entity.Unit;
import CQPM.com.payload.PatientResponse;
import CQPM.com.payload.UnitResponse;

/**
 * @author Do Bao Khanh
 *
 */
public class ModelMapper {

	/** Map Unit to UnitResponse payload
	 * @param unit
	 * @return
	 */
	public static UnitResponse mapUnitToUnitResponse(Unit unit) {
		UnitResponse unitResponse = new UnitResponse();
		unitResponse.setId(unit.getId());
		unitResponse.setName(unit.getName());
		unitResponse.setAddrress(unit.getAddrress());
		unitResponse.setNoOfPatients(unit.getPatients().stream().count());

		List<PatientResponse> patientsResponse = unit.getPatients().stream().map(patient -> {
			PatientResponse patientResponse = new PatientResponse();
			patientResponse.setId(patient.getId());
			patientResponse.setName(patient.getName());
			patientResponse.setEmail(patient.getEmail());
			patientResponse.setDailyChecks(patient.getDailyCheck());
			return patientResponse;
		}).collect(Collectors.toList());
		unitResponse.setPatients(patientsResponse);

		return unitResponse;
	}

	/** Add Patient to PatientResponse payload
	 * @param patient
	 * @return
	 */
	public static PatientResponse mapPatientToPatientResponse(Patient patient) {
		PatientResponse patientResponse = new PatientResponse();
		patientResponse.setId(patient.getId());
		patientResponse.setName(patient.getName());
		patientResponse.setDob(patient.getDob());
		patientResponse.setAddress(patient.getAddress());
		patientResponse.setEmail(patient.getEmail());
		patientResponse.setPhone(patient.getPhone());
		patientResponse.setDailyChecks(patient.getDailyCheck());

		return patientResponse;
	}
}
