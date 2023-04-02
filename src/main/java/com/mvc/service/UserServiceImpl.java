package com.mvc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mvc.model.User;
import com.mvc.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepo;

	@Override
	public List<User>login(String email, String password) {
		List<User> user = userRepo.findByEmailAndPassword(email, password);
		return user;
	}

}
