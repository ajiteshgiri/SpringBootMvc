package com.mvc.repo;


import org.springframework.data.jpa.repository.JpaRepository;

import com.mvc.model.Content;

public interface ContentRepository extends JpaRepository<Content, Integer>{

}
