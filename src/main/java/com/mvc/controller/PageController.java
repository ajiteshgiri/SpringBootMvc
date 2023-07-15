package com.mvc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.mvc.model.Content;
import com.mvc.service.ContentService;

@Controller
public class PageController {
	
	@Autowired
	ContentService contentService;
	
	@GetMapping("/contact-us")
	public String contact() {
		return "contact-us";
	}
	@GetMapping("/about-us")
	public String aboutus() {
		return "about-us";
	}
	@GetMapping("/privacy-policy")
	public String privacy() {
		return "privacy-policy";
	}
	@GetMapping("/terms-and-conditions")
	public String terms() {
		return "terms-and-conditions";
	}
	
	@GetMapping("/blog")
	public String blogIndex(Model model) {
		List<Content> blogData = contentService.getBlogList("1", "Active");
		model.addAttribute("blogData", blogData);
		return "/blog/index";
	}
	@GetMapping("/blog/{url}")
	public String blogInner(@PathVariable String url, Model model) {
		List<Content> blogData = contentService.getBlogContent("1", "Active",url);
		model.addAttribute("blogData", blogData);
		List<Content> recentData = contentService.getBlogList("1", "Active");
		model.addAttribute("recentData", recentData);
		return "/blog/innerPage";
	}

}
