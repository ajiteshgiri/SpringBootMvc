package com.mvc.service;

import java.util.List;

import com.mvc.model.User;

public interface UserService {
	
	public List<User> login(String email, String password);

}
