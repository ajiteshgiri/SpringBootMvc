package com.mvc.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.mvc.model.Content;
import com.mvc.service.ContentService;

@Controller
public class HomeController {

	@Autowired
	ContentService service;
	
	@GetMapping("/")
	public String home() {
		return "index";
	}
	@GetMapping("/addContent")
	public String content(@ModelAttribute Content content) {
		return "register";
	}
	
	@PostMapping("/register")
	public String registersave(@ModelAttribute Content content, Model model) {	
		Content regObj = content;
		service.save(regObj);
		model.addAttribute("message", "content addedsuccesful successfull");
		return "register";
	}
	
	@GetMapping("/edit/{id}")
	public String edit(@ModelAttribute Content content, @PathVariable int id,Model model, RedirectAttributes attributes) {
			Optional<Content> reg = service.getbyId(id);
			Content registerObj = new Content();
			try {
			registerObj = reg.get();
			model.addAttribute("register", registerObj);
			return "editRegister";
			}catch(NullPointerException ne) {
				attributes.addFlashAttribute("alertMessage", "Does not exist id: "+id);
				return "redirect:/";	
			}
	}
	@PostMapping("/update")
	public String editPost(@ModelAttribute Content content,Model model) {
		Content reg = service.update(content);
		model.addAttribute("message", "content update successfull");
		return "editRegister";
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable int id,Model model) {
		 service.delete(id);
		 System.out.println("delete successfull");
		return "editRegister";
	}
	
	@GetMapping("/all")
	public String allcontent(Model model) {
		List<Content> contList = service.getAllContent();
		model.addAttribute("contList", contList);
		return "contentList";
	}
	
	@GetMapping("/users-profile")
	public String profile(Model model) {
		
		return "users-profile";
	}
	
	
}
