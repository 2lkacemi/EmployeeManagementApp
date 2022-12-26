package tech.app.employeemanagerapp.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
    void deleteEmployeeById(Long id);
    Optional<Employee> findEmployeeById(Long id);
}
