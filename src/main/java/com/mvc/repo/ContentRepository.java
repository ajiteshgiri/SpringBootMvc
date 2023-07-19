package com.mvc.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mvc.model.Content;

public interface ContentRepository extends JpaRepository<Content, Integer>{
	
	List<Content> findBySiteIdAndStatus(String siteId, String status);
	List<Content> findBySiteIdAndStatusAndBlogUrl(String siteId, String status, String blogUrl);
	

}
