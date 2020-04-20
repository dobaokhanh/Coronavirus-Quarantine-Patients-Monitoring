package CQPM.com.service;

import java.net.URI;
import java.util.Collections;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import CQPM.com.entity.DailyCheck;
import CQPM.com.entity.Patient;
import CQPM.com.entity.Unit;
import CQPM.com.exception.ResourceNotFoundException;
import CQPM.com.payload.ApiResponse;
import CQPM.com.payload.DailyCheckRequest;
import CQPM.com.payload.PagedResponse;
import CQPM.com.payload.PatientRequest;
import CQPM.com.payload.PatientResponse;
import CQPM.com.repository.PatientRepository;
import CQPM.com.repository.UnitRepository;
import CQPM.com.util.ModelMapper;
import CQPM.com.util.Utilities;

/**
 * @author Do Bao Khanh
 *
 */
@Service
public class PatientService {

	@Autowired
	UnitRepository unitRepository;

	@Autowired
	PatientRepository patientRepository;

	// private static final Logger logger =
	// LoggerFactory.getLogger(PatientService.class);

	/**
	 * Get all the patients
	 * 
	 * @param page
	 * @param size
	 * @return
	 */
	public PagedResponse<PatientResponse> getAllPatients(Long unitId, int page, int size) {
		Utilities.validatePageNumberAndSize(page, size);

		// Retrieve unit by id
		Unit unit = unitRepository.findById(unitId)
				.orElseThrow(() -> new ResourceNotFoundException("Unit", "id", unitId));

		// Retrieve patients
		Pageable pageable = PageRequest.of(page, size, Direction.ASC, "name");
		Page<Patient> patients = patientRepository.findByUnitId(unit.getId(), pageable);

		if (patients.getNumberOfElements() == 0) {
			return new PagedResponse<>(Collections.emptyList(), patients.getNumber(), patients.getSize(),
					patients.getTotalElements(), patients.getTotalPages(), patients.isLast());
		}

		List<PatientResponse> patientResponses = patients.map(patient -> {
			return ModelMapper.mapPatientToPatientResponse(patient);
		}).getContent();

		return new PagedResponse<>(patientResponses, patients.getNumber(), patients.getSize(),
				patients.getTotalElements(), patients.getTotalPages(), patients.isLast());
	}

	/**
	 * Add new patient
	 * 
	 * @param patientRequest
	 * @return patient added
	 */
	public Patient createPatient(PatientRequest patientRequest) {

		Unit unit = unitRepository.findById(patientRequest.getUnitId())
				.orElseThrow(() -> new ResourceNotFoundException("Unit", "id", patientRequest.getUnitId()));

		Patient patient = new Patient();
		patient.setName(patientRequest.getName());
		patient.setDob(patientRequest.getDob());
		patient.setAddress(patientRequest.getAddress());
		patient.setEmail(patientRequest.getEmail());
		patient.setPhone(patientRequest.getPhone());
		patient.setDailyCheck(patientRequest.getDailyCheck());
		patient.setUnit(unit);
		return patientRepository.save(patient);
	}

	/**
	 * Get patient by id
	 * 
	 * @param unitId
	 * @param patientId
	 * @return patient
	 */
	public PatientResponse getPatientById(Long unitId, Long patientId) {
		Unit unit = unitRepository.findById(unitId)
				.orElseThrow(() -> new ResourceNotFoundException("Unit", "id", unitId));

		Patient patient = patientRepository.findByUnitIdAndId(unit.getId(), patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient", "id", patientId));

		PatientResponse patientResponse = ModelMapper.mapPatientToPatientResponse(patient);
		return patientResponse;
	}

	/**
	 * Add daily check
	 * 
	 * @param dailyCheckRequest
	 * @param patientId
	 * @return
	 */
	public Patient addDailyCheck(@RequestBody List<DailyCheckRequest> dailyCheckRequests, Long unitId, Long patientId) {

		Unit unit = unitRepository.findById(unitId)
				.orElseThrow(() -> new ResourceNotFoundException("Unit", "id", unitId));

		Patient patient = patientRepository.findByUnitIdAndId(unit.getId(), patientId)
				.orElseThrow(() -> new ResourceNotFoundException("Patient", "id", patientId));
		DailyCheck dailyCheck = null;
		for (DailyCheckRequest day : dailyCheckRequests) {
			dailyCheck = new DailyCheck();
			dailyCheck.setDayNumber(day.getDayNumber());
			dailyCheck.setTemperature(day.getTemperature());
			dailyCheck.setCough(day.getCough());
			dailyCheck.setFever(day.getFever());
			dailyCheck.setExhausted(day.getExhausted());
			dailyCheck.setShortnessOfBreath(day.getShortnessOfBreath());
			patient.addDailyCheck(dailyCheck);
		}
		return patientRepository.save(patient);
	}

	/**
	 * Remove patient
	 * 
	 * @param patientRequest
	 * @return
	 */
	public ResponseEntity<?> removePatient(@Valid @RequestBody PatientRequest patientRequest) {
		Patient patient = patientRepository.findByNameAndEmail(patientRequest.getName(), patientRequest.getEmail());

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().replacePath("/api/{unitId}/patients").build()
				.toUri();

		patientRepository.delete(patient);

		return ResponseEntity.created(location).body(new ApiResponse(true, "Delete successfully !"));

	}
}
