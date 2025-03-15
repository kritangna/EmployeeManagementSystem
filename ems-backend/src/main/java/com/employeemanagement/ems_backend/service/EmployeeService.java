package com.employeemanagement.ems_backend.service;

import com.employeemanagement.ems_backend.dto.EmployeeDto;
import com.employeemanagement.ems_backend.entity.Employee;

import java.util.List;


public interface EmployeeService {

    EmployeeDto addEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long id);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);

    void deleteEmployee(Long id);
}
