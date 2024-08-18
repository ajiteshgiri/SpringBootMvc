package com.mvc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mvc.model.Content;
import com.mvc.model.Country;
import com.mvc.repo.CountryRepository;
import com.mvc.service.ContentService;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	ContentService contentService;
	
	@Autowired
	CountryRepository countryRepository;
	
	@GetMapping("/action/{id}")
	public String actionStatus(@PathVariable int id) {
		try {
		Optional<Content> contentbyId = contentService.getbyId(id);
		Content content =contentbyId.get();
		String getStatus = contentService.checkStatus(id);
		
		if(content.getStatus().equalsIgnoreCase("Active")) {
			content.setStatus("Inactive");
		}else {
			content.setStatus("Active");
		}
		Content updateContent = contentService.update(content);
		return updateContent.getStatus();
		}catch(Exception e) {
			return "failure";
		}
	}
	
	@GetMapping("/getAllContent")
	public List<Content> AllContent(){
		List<Content> getListOfContent= contentService.getAllContent();
		return getListOfContent;
	}
	
	@GetMapping("/getAllCountry")
	public List<Country> getcountrylist(){
		return countryRepository.findAll();
	}

}
