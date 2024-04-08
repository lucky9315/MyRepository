package com.cetpa.admin.repository;

import java.util.List;

import com.cetpa.admin.model.Employee;

public interface EmployeeRepository 
{
	List<Employee> getEmployeeList();
}
