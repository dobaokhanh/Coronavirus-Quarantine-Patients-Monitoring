package CQPM.com.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.cqpm.payload.PatientResponse;
import com.cqpm.service.PatientService;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * @author Do Bao Khanh
 *
 */
@SpringBootTest
@AutoConfigureMockMvc
public class TestPatientController {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private PatientService patientService;

	// ------------Test get patient by id api-----------------

	@WithMockUser("USER")
	@Test
	public void getPatientById() throws Exception {

		// Build request
		MvcResult mvcResult = mvc
				.perform(MockMvcRequestBuilders.get("/api/1/patients/2").accept(MediaType.APPLICATION_JSON_VALUE))
				.andReturn();
		// Test status
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);

		// Test the content
		String content = mvcResult.getResponse().getContentAsString();
		PatientResponse patientResponse = patientService.getPatientById((long) 1, (long) 2);
		ObjectMapper mapper = new ObjectMapper();
		String patientResponseJson = mapper.writeValueAsString(patientResponse);
		assertEquals(patientResponseJson, content);
	}

	// -----------------Test create patient---------------------
//	@WithMockUser("USER")
//	@Test
//	public void createPatient() throws Exception {
//
//		// Create patient request object
//		PatientRequest patientRequest = new PatientRequest();
//		patientRequest.setName("Test Patient");
//		patientRequest.setDob("12/11/2000");
//		patientRequest.setAddress("Helsinki");
//		patientRequest.setEmail("test.patient@gmail.com");
//		patientRequest.setPhone("0123124144");
//		patientRequest.setUnitId((long) 1);
//		patientRequest.setDailyCheck(new ArrayList<>());
//
//		ObjectMapper objectMapper = new ObjectMapper();
//		String patientRequestJson = objectMapper.writeValueAsString(patientRequest);
//		// Build request
//		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post("/api/1/patients")
//				.accept(MediaType.APPLICATION_OCTET_STREAM).content(patientRequestJson)).andReturn();
//		
//	}
}
