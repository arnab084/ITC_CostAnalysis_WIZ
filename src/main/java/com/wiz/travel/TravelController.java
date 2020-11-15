package com.wiz.travel;

import com.wiz.beans.User;
import com.wiz.travel.entity.KeyValueResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TravelController {

	@Autowired
	TravelService travelService;
	
	@GetMapping(path="/getExpensePerEmployee")
	public @ResponseBody
	List<KeyValueResponse> getExpensePerEmployee() {
		return travelService.getExpensePerEmployee();
	}

	@GetMapping(path="/getExpenseByCategory")
	public @ResponseBody
	List<KeyValueResponse> getExpenseByBranch() {
		return travelService.getExpenseByBranch();
	}


}
