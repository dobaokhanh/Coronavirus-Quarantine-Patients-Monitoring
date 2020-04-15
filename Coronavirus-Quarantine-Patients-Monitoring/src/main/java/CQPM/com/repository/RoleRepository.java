package CQPM.com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import CQPM.com.entity.Role;
import CQPM.com.entity.RoleName;

/**
 * @author Do Bao Khanh
 *
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(RoleName roleName);
}
