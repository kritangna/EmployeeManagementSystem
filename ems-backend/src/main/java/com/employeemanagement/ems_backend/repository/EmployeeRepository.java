package com.employeemanagement.ems_backend.repository;

import com.employeemanagement.ems_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
