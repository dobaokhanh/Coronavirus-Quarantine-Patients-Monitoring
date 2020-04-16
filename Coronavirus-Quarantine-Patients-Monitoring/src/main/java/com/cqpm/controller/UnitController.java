package com.cqpm.controller;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cqpm.entity.Unit;
import com.cqpm.payload.ApiResponse;
import com.cqpm.payload.PagedResponse;
import com.cqpm.payload.UnitRequest;
import com.cqpm.payload.UnitResponse;
import com.cqpm.service.UnitService;
import com.cqpm.util.AppConstants;

/**
 * @author Do Bao Khanh
 *
 */
@RestController
@RequestMapping("/api/units")
public class UnitController {

	@Autowired
	private UnitService unitService;

	//private static final Logger logger = LoggerFactory.getLogger(UnitController.class);

	public PagedResponse<UnitResponse> getAllUnits(
			@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
			@RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
		return unitService.getAllUnits(page, size);
	}

	@PostMapping
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> createUnit(@Valid @RequestBody UnitRequest unitRequest) {
		Unit unit = unitService.createUnit(unitRequest);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{unitId}").buildAndExpand(unit.getId())
				.toUri();

		return ResponseEntity.created(location).body(new ApiResponse(true, "Unit created successfully !"));
	}

	@GetMapping("/{unitId}")
	public UnitResponse getUnitById(@PathVariable Long unitId) {
		return unitService.getUnitById(unitId);
	}
	
	
}
