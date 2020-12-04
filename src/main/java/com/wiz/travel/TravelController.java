package com.wiz.travel;

import com.wiz.beans.User;
import com.wiz.travel.entity.KeyValueResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TravelController {

	@Autowired
	TravelService travelService;
	
	@PostMapping(path="/getExpensePerEmployee")
	public @ResponseBody
	List<KeyValueResponse> getExpensePerEmployee(@RequestParam(defaultValue = "10") int employeeCount) {
		return travelService.getExpensePerEmployee(employeeCount);
	}

	@PostMapping(path="/getExpensePerEmployeeByTime")
	public @ResponseBody
	List<KeyValueResponse> getExpensePerEmployeeByTime(@RequestParam("startDate") Date startDate, @RequestParam("endDate") Date endDate, @RequestParam(defaultValue = "10") int employeeCount) {
		return travelService.getExpensePerEmployeeByTime(startDate, endDate);
	}

	@GetMapping(path="/getExpenseByBranch")
	public @ResponseBody
	List<KeyValueResponse> getExpenseByBranch() {
		return travelService.getExpenseByBranch();
	}

	@GetMapping(path="/getExpenseByBusinessArea")
	public @ResponseBody
	List<KeyValueResponse> getExpenseByBusinessArea() {
		return travelService.getExpenseByBusinessArea();
	}

	@GetMapping(path="/getExpenseByDesignation")
	public @ResponseBody
	List<KeyValueResponse> getExpenseByDesignation() {
		return travelService.getExpenseByDesignation();
	}

	@GetMapping(path="/getExpenseByCostCenter")
	public @ResponseBody
	List<KeyValueResponse> getExpenseByCostCenter() {
		return travelService.getExpenseByCostCenter();
	}

	@GetMapping(path="/getExpenseByEmployeeGrade")
	public @ResponseBody
	List<KeyValueResponse> getExpenseByEmployeeGrade() {
		return travelService.getExpenseByEmployeeGrade();
	}


}
