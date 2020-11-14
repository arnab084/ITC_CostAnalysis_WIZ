package com.wiz.travel;

import com.wiz.beans.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TravelController {
	
	@GetMapping(path="/traveluser")
	  public @ResponseBody
    User getBestUser() {
		return new User("arnab","arnabp");
	  }
	
	@GetMapping(path="/travelusers")
	  public @ResponseBody User[] getAllUsers() {
		User[] obj = new User[2];
		obj[0] = new User("arnab","arnabp");
		obj[1] = new User("arnab2","arnabp");
		return obj;
	  }

}
