package com.mvc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="country")
public class Country {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int country_id;
	private String iso;
	private String country_title;
	private String nicename;
	private String iso3;
	private int numcode;
	private int phonecode;
	private int region_id;
	private String centerAdress;
	private String centerPhone;
	private String centerEmail;
	private String centerImage;
	private String status;
	private int order_rank;
	
	public int getCountry_id() {
		return country_id;
	}
	public void setCountry_id(int country_id) {
		this.country_id = country_id;
	}
	public String getIso() {
		return iso;
	}
	public void setIso(String iso) {
		this.iso = iso;
	}
	public String getCountry_title() {
		return country_title;
	}
	public void setCountry_title(String country_title) {
		this.country_title = country_title;
	}
	public String getNicename() {
		return nicename;
	}
	public void setNicename(String nicename) {
		this.nicename = nicename;
	}
	public String getIso3() {
		return iso3;
	}
	public void setIso3(String iso3) {
		this.iso3 = iso3;
	}
	public int getNumcode() {
		return numcode;
	}
	public void setNumcode(int numcode) {
		this.numcode = numcode;
	}
	public int getPhonecode() {
		return phonecode;
	}
	public void setPhonecode(int phonecode) {
		this.phonecode = phonecode;
	}
	public int getRegion_id() {
		return region_id;
	}
	public void setRegion_id(int region_id) {
		this.region_id = region_id;
	}
	public String getCenterAdress() {
		return centerAdress;
	}
	public void setCenterAdress(String centerAdress) {
		this.centerAdress = centerAdress;
	}
	public String getCenterPhone() {
		return centerPhone;
	}
	public void setCenterPhone(String centerPhone) {
		this.centerPhone = centerPhone;
	}
	public String getCenterEmail() {
		return centerEmail;
	}
	public void setCenterEmail(String centerEmail) {
		this.centerEmail = centerEmail;
	}
	public String getCenterImage() {
		return centerImage;
	}
	public void setCenterImage(String centerImage) {
		this.centerImage = centerImage;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getOrder_rank() {
		return order_rank;
	}
	public void setOrder_rank(int order_rank) {
		this.order_rank = order_rank;
	}
	
}
