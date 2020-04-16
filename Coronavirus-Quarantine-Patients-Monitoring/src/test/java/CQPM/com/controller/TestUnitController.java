package CQPM.com.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import com.cqpm.service.UnitService;

@SpringBootTest
@AutoConfigureMockMvc
public class TestUnitController {
	@Autowired
	private MockMvc mvc;

	@Autowired
	private UnitService unitService;
	
	@WithMockUser("USER")
	@Test
	public void getUnitById() {
		
	}

}
