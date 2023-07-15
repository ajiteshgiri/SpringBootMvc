package com.mvc.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mvc.model.Content;
import com.mvc.repo.ContentRepository;

@Service
public class ContentServiceImpl implements ContentService {

	@Autowired
	ContentRepository repo;
	
	@Override
	public void save(Content content) {
		content.setSiteId("1");
		repo.save(content);
	}

	@Override
	public Optional<Content> getbyId(int id) {
		Optional<Content> regOpt = repo.findById(id);
		if(regOpt.isPresent()) {
			return regOpt;	
		}else {
			return null;
		}
		
	}

	@Override
	public Content update(Content content) {
		if(repo.existsById(content.getId())) {
			content.setId(content.getId());
			content.setTitle(content.getTitle());
			content.setKeywords(content.getKeywords());
			content.setHeading(content.getHeading());
			content.setDescription(content.getDescription());
			content.setStatus(content.getStatus());
			content.setSiteId("1");
			content.setBlogUrl(content.getBlogUrl());
			content.setContentdata(content.getContentdata());
			repo.save(content);
		}
		return null;
	}

	@Override
	public void delete(int id) {
		repo.deleteById(id);
		
	}

	@Override
	public List<Content> getAllContent() {
		return repo.findAll();
	}

	@Override
	public List<Content> getBlogList(String siteId, String status) {
		List<Content> contentList = repo.findBySiteIdAndStatus(siteId, status);
		return contentList;
	}

	@Override
	public List<Content> getBlogContent(String siteId, String status, String url) {
		List<Content> contentList = repo.findBySiteIdAndStatusAndBlogUrl(siteId, status,url);
		return contentList;
	}

}
