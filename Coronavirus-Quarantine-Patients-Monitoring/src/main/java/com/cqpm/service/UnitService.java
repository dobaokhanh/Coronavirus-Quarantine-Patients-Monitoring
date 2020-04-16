package com.cqpm.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.cqpm.entity.Unit;
import com.cqpm.exception.ResourceNotFoundException;
import com.cqpm.payload.PagedResponse;
import com.cqpm.payload.UnitRequest;
import com.cqpm.payload.UnitResponse;
import com.cqpm.repository.UnitRepository;
import com.cqpm.util.ModelMapper;
import com.cqpm.util.Utilities;

/**
 * @author Do Bao Khanh
 *
 */
@Service
public class UnitService {

	@Autowired
	private UnitRepository unitRepository;

	//private static final Logger logger = LoggerFactory.getLogger(UnitService.class);

	public PagedResponse<UnitResponse> getAllUnits(int page, int size) {
		Utilities.validatePageNumberAndSize(page, size);

		// Retrieve units
		Pageable pageable = PageRequest.of(page, size, Sort.Direction.ASC, "name");
		Page<Unit> units = unitRepository.findAll(pageable);

		if (units.getNumberOfElements() == 0) {
			return new PagedResponse<>(Collections.emptyList(), units.getNumber(), units.getSize(),
					units.getTotalElements(), units.getTotalPages(), units.isLast());
		}

		List<UnitResponse> unitResponse = units.map(unit -> {
			return ModelMapper.mapUnitToUnitResponse(unit);
		}).getContent();

		return new PagedResponse<>(unitResponse, units.getNumber(), units.getSize(), units.getTotalElements(),
				units.getTotalPages(), units.isLast());
	}

	/**
	 * Create new unit
	 * 
	 * @param unitRequest
	 * @return unit
	 */
	public Unit createUnit(UnitRequest unitRequest) {
		Unit unit = new Unit();
		unit.setName(unitRequest.getName());
		unit.setAddrress(unitRequest.getAddrress());
		unit.setPatients(unitRequest.getPatients());

		return unitRepository.save(unit);
	}

	/**	Get unit by id
	 * @param unitId
	 * @return unit
	 */
	public UnitResponse getUnitById(Long unitId) {
		Unit unit = unitRepository.findById(unitId)
				.orElseThrow(() -> new ResourceNotFoundException("Unit", "id", unitId));

		return ModelMapper.mapUnitToUnitResponse(unit);
	}
	
}
