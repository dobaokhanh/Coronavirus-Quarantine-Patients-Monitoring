package CQPM.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import CQPM.com.entity.DailyCheck;

public interface DailyCheckRepository extends JpaRepository<DailyCheck, Long> {

}
