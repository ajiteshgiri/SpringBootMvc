package com.mvc.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mvc.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

}
