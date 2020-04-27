package CQPM.com.controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import CQPM.com.entity.Patient;
import CQPM.com.payload.ApiResponse;
import CQPM.com.payload.DailyCheckRequest;
import CQPM.com.payload.PagedResponse;
import CQPM.com.payload.PatientRequest;
import CQPM.com.payload.PatientResponse;
import CQPM.com.service.PatientService;
import CQPM.com.util.AppConstants;
import CQPM.com.util.ModelMapper;

/**
 * @author Do Bao Khanh
 *
 */
@RestController
@RequestMapping("/api")
public class PatientController {

	@Autowired
	private PatientService patientService;

	// private static final Logger logger =
	// LoggerFactory.getLogger(PatientController.class);

	/**
	 * Get all the patients of one unit
	 * 
	 * @param page
	 * @param size
	 * @param unitId
	 * @return patients
	 */
	@GetMapping("/{unitId}/patients")
	public PagedResponse<PatientResponse> getAllPatients(
			@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
			@RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
			@PathVariable Long unitId) {
		return patientService.getAllPatients(unitId, page, size);
	}

	@PostMapping("/{unitId}/patients")
	@PreAuthorize("hasRole('ADMIN')")
	public PatientResponse createPatient(@Valid @RequestBody PatientRequest patientRequest) {
		Patient patient = patientService.createPatient(patientRequest);

		return ModelMapper.mapPatientToPatientResponse(patient);
	}

	/**
	 * Get patient by id
	 * 
	 * @param unitId
	 * @param patientId
	 * @return PatientResponse
	 */
	@GetMapping("/{unitId}/patients/{patientId}")
	public PatientResponse getPatientById(@PathVariable(name = "unitId") Long unitId,
			@PathVariable(name = "patientId") Long patientId) {
		return patientService.getPatientById(unitId, patientId);
	}

	/**
	 * Add daily check
	 * 
	 * @param unitId
	 * @param patientId
	 * @param dailyCheckRequest
	 * @return
	 */
	@PutMapping("/{unitId}/patients/{patientId}")
	public PatientResponse addDailyCheck(@PathVariable(name = "unitId") Long unitId,
			@PathVariable(name = "patientId") Long patientId,
			@Valid @RequestBody List<DailyCheckRequest> dailyCheckRequest) {

		return ModelMapper
				.mapPatientToPatientResponse(patientService.addDailyCheck(dailyCheckRequest, unitId, patientId));
	}

	@DeleteMapping("/{unitId}/patients")
	public ResponseEntity<?> deletePatient(@Valid @RequestBody PatientRequest patientRequest) {
		return patientService.removePatient(patientRequest);
	}

}
