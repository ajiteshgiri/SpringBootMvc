package com.mvc.service;

import java.util.List;
import java.util.Optional;

import com.mvc.model.Role;
import com.mvc.model.User;

public interface UserService {
	
	public List<User> login(String email, String password);
	public void saveUser(User user);
	public User update(User user);
	public Optional<User> getByid(int id);
	public void deleteid (int id);
	public List<Role> getAllRole();

}
