package com.wiz.travel;

import com.wiz.beans.User;
import com.wiz.travel.entity.KeyValueResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TravelController {

	@Autowired
	TravelService travelService;
	
	@GetMapping(path="/getExpensePerEmployee")
	public @ResponseBody
	List<KeyValueResponse> getExpensePerEmployee() {
		return travelService.getExpensePerEmployee();
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
