package com.swipecell.ims.imsapi.distributor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Distributor {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String address;
	private String phone;
	private String email;
	private String panOrVatNo;

	public Distributor() {

	}

	public Distributor(Integer id, String name, String address, String phone, String email, String panOrVatNo) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.panOrVatNo = panOrVatNo;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPanOrVatNo() {
		return panOrVatNo;
	}

	public void setPanOrVatNo(String panOrVatNo) {
		this.panOrVatNo = panOrVatNo;
	}

}
