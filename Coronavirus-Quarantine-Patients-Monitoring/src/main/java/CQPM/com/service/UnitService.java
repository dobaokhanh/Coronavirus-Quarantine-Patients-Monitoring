package CQPM.com.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import CQPM.com.entity.Unit;
import CQPM.com.exception.ResourceNotFoundException;
import CQPM.com.payload.PagedResponse;
import CQPM.com.payload.UnitRequest;
import CQPM.com.payload.UnitResponse;
import CQPM.com.repository.UnitRepository;
import CQPM.com.util.ModelMapper;
import CQPM.com.util.Utilities;

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
		unit.setAddress(unitRequest.getAddrress());

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
