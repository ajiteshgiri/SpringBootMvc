package com.mvc.service;

import java.util.List;
import java.util.Optional;

import com.mvc.model.Content;

public interface ContentService {
	
	public void save(Content content);
	public Optional<Content> getbyId(int id);
	public Content update(Content content);
	public void delete( int id);
	public List<Content> getAllContent();
	public List<Content> getBlogList(String siteId, String status);
	public List<Content> getBlogContent(String siteId, String status, String url);
}
