package com.cetpa.admin.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cetpa.admin.model.Employee;
import com.cetpa.admin.repository.EmployeeRepository;
import com.cetpa.admin.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService 
{
	private EmployeeRepository employeeRepository;

	public List<Employee> getList() 
	{
		return employeeRepository.getEmployeeList();
	}
}
