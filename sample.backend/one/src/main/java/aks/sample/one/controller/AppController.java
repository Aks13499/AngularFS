package aks.sample.one.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import aks.sample.one.model.Message;

@CrossOrigin("*")
@RestController
@RequestMapping("/app")
public class AppController {

	@GetMapping("/hello")
	public Message Hello() {
//		throw new RuntimeException("Issue");
		return new Message("Aks");
	}
	
}
