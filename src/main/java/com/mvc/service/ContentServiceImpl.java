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
			content.setSiteId(content.getSiteId());
			content.setBlogUrl(content.getBlogUrl());
			content.setContent(content.getContent());
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

}
