package com.mvc.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mvc.model.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {

}
