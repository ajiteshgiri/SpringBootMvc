package com.mvc.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.mvc.model.Content;
import com.mvc.model.Role;
import com.mvc.model.User;
import com.mvc.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	UserService userService;

	@GetMapping("/register")
	public String register(@ModelAttribute User user, Model model) {
		List<Role> listofRole = userService.getAllRole();
		model.addAttribute("listRole", listofRole);
		return "/admin/pages-register";
	}
	
	@PostMapping("/registerSave")
	public String registersave(@ModelAttribute User user, Model model,RedirectAttributes attribute) {	
		User regObj = user;
		regObj.setSiteId(1);
		
		userService.saveUser(regObj);
		attribute.addFlashAttribute("message", "User registered successfull");
		attribute.addFlashAttribute("alertMessage", "User registered successfully");
		return "redirect:/register";
	}
	
	@GetMapping({"/", "/login"})
	public String login(@ModelAttribute User user) {
		return "/admin/login";
	}
	@PostMapping("/login")
	public String loginRes(@ModelAttribute User user,HttpServletRequest req,RedirectAttributes attribute,Model model) {
		List<User>  reguser = userService.login(user.getEmail(), user.getPassword());
		if(reguser.size() !=0) {
		User userdata = new User();
		userdata= reguser.get(0);
		req.getSession().setAttribute("user", userdata);
		model.addAttribute("user", userdata);
		return "redirect:/dashboard";
		}else {
			attribute.addFlashAttribute("message", "userName and password invalid");
			return "redirect:/login";
		}
	}
	@GetMapping("/logout")
	public String closeSession(HttpServletRequest req, RedirectAttributes attribute ){
		req.getSession().invalidate();
		attribute.addFlashAttribute("messagelogout", "user logout successfully");
		return "redirect:/login";
	}
}
