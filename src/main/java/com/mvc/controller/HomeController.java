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
import com.mvc.model.Role;
import com.mvc.model.User;
import com.mvc.service.ContentService;
import com.mvc.service.UserService;

@Controller
public class HomeController {

	@Autowired
	ContentService service;
	@Autowired
	UserService userService;
	
	@GetMapping("/")
	public String homepage(Model model,HttpServletRequest req) {
		model.addAttribute("ajitesh", "you are java developer");
		req.getSession().setAttribute("ravikant", "php developer");
		return "index";
	}

	
	@GetMapping("/dashboard")
	public String dashboard(HttpServletRequest req) {
		if(req.getSession().getAttribute("user") != null) {
			return "/admin/index";
		}else {
			return "redirect:/login";
		}
		
	}
	@GetMapping("/addContent")
	public String addBlog(@ModelAttribute Content contentform,HttpServletRequest req) {
		if(req.getSession().getAttribute("user") != null) {
			return "/admin/pages-contact";
		}else {
			return "redirect:/login";
		}
	}
	@PostMapping("/addContentsave")
	public String addBlogsave(@ModelAttribute Content contentform,HttpServletRequest req,RedirectAttributes attribute) {
		if(req.getSession().getAttribute("user") !=null) {
			service.save(contentform);
			attribute.addFlashAttribute("saveMessage","blog successfull add");
			return "redirect:/addContent";
		}
		return "redirect:/login";
	}
	
	@GetMapping("/showContent")
	public String showBlogList(HttpServletRequest req,Model model) {
		if(req.getSession().getAttribute("user") !=null) {
			List<Content> getAllContent = service.getAllContent();
			model.addAttribute("contentLit", getAllContent);
			return "/admin/showblogList";
		}
		return "redirect:/login";
	}
	
	@GetMapping("/editContent/{id}")
	public String editContent(@ModelAttribute Content content,@PathVariable int id, HttpServletRequest req,Model model) {
		if(req.getSession().getAttribute("user") !=null) {
			Optional<Content> reg = service.getbyId(id);
			model.addAttribute("contentLit", reg.get());
			return "/admin/editContent";
		}
		return "redirect:/login";
	}
	
	@PostMapping("/updateContent")
	public String updateContent(@ModelAttribute Content contentform, HttpServletRequest req,Model model) {
		if(req.getSession().getAttribute("user") !=null) {
		Content updateContent = service.update(contentform);
		if(updateContent != null) {
			model.addAttribute("saveMessage", "update content successfully");
			return "/admin/editContent";
		}
		return "redirect:/showContent";
		}
		return "redirect:/login";
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
		return "/admin/editRegister";
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable int id,Model model) {
		 service.delete(id);
		 System.out.println("delete successfull");
		return "/admin/editRegister";
	}
	
	@GetMapping("/all")
	public String allcontent(Model model) {
		List<Content> contList = service.getAllContent();
		model.addAttribute("contList", contList);
		return "/admin/contentList";
	}
	
	@GetMapping("/users-profile")
	public String profile(Model model) {
		
		return "/admin/users-profile";
	}
	
	
}
