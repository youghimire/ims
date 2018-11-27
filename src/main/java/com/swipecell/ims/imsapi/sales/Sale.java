package com.swipecell.ims.imsapi.sales;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Sale {

	
	private Integer id;
	private Date date;
	private BigDecimal amount;
	private String billName;
	private String remark;
	
	
	private Set<SaleItem> saleItems;

	public Sale() {

	}

	public Sale( Date date, BigDecimal amount, String billName, String remark) {
		super();
		this.date = date;
		this.amount = amount;
		this.billName = billName;
		this.remark = remark;
		this.saleItems = new HashSet<>();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getBillName() {
		return billName;
	}

	public void setBillName(String billName) {
		this.billName = billName;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@OneToMany(mappedBy="sale")
	public Set<SaleItem> getSaleItems() {
		return this.saleItems;
	}

	public void setSaleItems(Set<SaleItem> saleItems) {
		this.saleItems = saleItems;
	}
	
	

}
