package com.cqpm.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cqpm.entity.Role;
import com.cqpm.entity.RoleName;

/**
 * @author Do Bao Khanh
 *
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(RoleName roleName);
}
