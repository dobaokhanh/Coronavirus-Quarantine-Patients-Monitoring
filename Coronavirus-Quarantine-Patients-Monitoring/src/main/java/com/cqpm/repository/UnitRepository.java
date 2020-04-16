package com.cqpm.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cqpm.entity.Unit;

/**
 * @author Do Bao Khanh
 *
 */
@Repository
public interface UnitRepository extends JpaRepository<Unit, Long> {
	
	Optional<Unit> findById(Long unitId);
	
	Optional<Unit> findByName(String unitName);
	
	List<Unit> findByIdIn(List<Long> unitIds);
	
	List<Unit> findByIdIn(List<Long> unitIds, Sort sort);
}
