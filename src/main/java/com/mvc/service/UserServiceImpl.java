package com.mvc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mvc.model.Role;
import com.mvc.model.User;
import com.mvc.repo.RoleRepository;
import com.mvc.repo.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	RoleRepository roleRepo;
	
	
	//getting all role in role table
	@Override
	public List<Role> getAllRole(){
		return roleRepo.findAll();
	}

	@Override
	public List<User>login(String email, String password) {
		List<User> user = userRepo.findByEmailAndPassword(email, password);
		return user;
	}

	@Override
	public void saveUser(User user) {
		userRepo.save(user);
		
	}

	@Override
	public User update(User user) {
		User userdata = new User();
		if(userRepo.existsById(user.getId())) {
			userdata.setEmail(user.getEmail());
			userdata.setName(user.getName());
			userdata.setPassword(user.getPassword());
			userdata.setSiteId(user.getSiteId());
			userdata.setRoleId(user.getRoleId());
			userRepo.save(userdata);
		}
		return userdata;
	}

	@Override
	public Optional<User> getByid(int id) {
		
		return userRepo.findById(id);
	}

	@Override
	public void deleteid(int id) {
		 userRepo.deleteById(id);
		 
	}

}
