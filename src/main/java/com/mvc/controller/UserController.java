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

import com.mvc.model.User;
import com.mvc.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	UserService userService;

	@GetMapping("/login")
	public String login(@ModelAttribute User user) {
		return "login";
	}
	@PostMapping("/login")
	public String loginRes(@ModelAttribute User user,HttpServletRequest req,RedirectAttributes attribute,Model model) {
		List<User>  reguser = userService.login(user.getEmail(), user.getPassword());
		if(reguser.size() !=0) {
		User userdata = new User();
		userdata= reguser.get(0);
		req.getSession().setAttribute("user", userdata);
		model.addAttribute("user", userdata);
		return "redirect:/";
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
