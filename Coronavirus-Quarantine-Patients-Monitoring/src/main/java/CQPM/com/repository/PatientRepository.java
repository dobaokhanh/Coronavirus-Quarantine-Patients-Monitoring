package CQPM.com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import CQPM.com.entity.Patient;

/**
 * @author Do Bao Khanh
 *
 */
@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

	Optional<Patient> findById(Long patientId);

	Optional<Patient> findByUnitIdAndId(Long unitId, Long patientId);

	Page<Patient> findByUnitId(@Param("unitId") Long unitId, Pageable pageable);

	Patient findByNameAndEmail(String name, String email);

	List<Patient> findByIdIn(List<Long> patientIds);

	List<Patient> findByIdIn(List<Long> patientIds, Sort sort);
}
