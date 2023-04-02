package com.mvc.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mvc.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	public List<User> findByEmailAndPassword(String email, String password);
}
