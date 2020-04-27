package CQPM.com.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import CQPM.com.entity.Unit;
import CQPM.com.payload.PagedResponse;
import CQPM.com.payload.UnitRequest;
import CQPM.com.payload.UnitResponse;
import CQPM.com.service.UnitService;
import CQPM.com.util.AppConstants;
import CQPM.com.util.ModelMapper;

/**
 * @author Do Bao Khanh
 *
 */
@RestController
@RequestMapping("/api/units")
public class UnitController {

	@Autowired
	private UnitService unitService;

	@GetMapping
	public PagedResponse<UnitResponse> getAllUnits(
			@RequestParam(value = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
			@RequestParam(value = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size) {
		return unitService.getAllUnits(page, size);
	}

	@PostMapping
	public UnitResponse createUnit(@Valid @RequestBody UnitRequest unitRequest) {
		Unit unit = unitService.createUnit(unitRequest);
		return ModelMapper.mapUnitToUnitResponse(unit);
	}

	@GetMapping("/{unitId}")
	public UnitResponse getUnitById(@PathVariable Long unitId) {
		return unitService.getUnitById(unitId);
	}

}
