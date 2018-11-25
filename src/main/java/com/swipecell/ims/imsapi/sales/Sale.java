package com.swipecell.ims.imsapi.sales;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Sale {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private Date date;
	private BigDecimal amount;
	private String billName;
	private String remark;
	@OneToMany(mappedBy="sale")
	private List<SaleItem> saleItem = new ArrayList<>();

	public Sale() {

	}

	public Sale(Integer id, Date date, BigDecimal amount, String billName, String remark) {
		super();
		this.id = id;
		this.date = date;
		this.amount = amount;
		this.billName = billName;
		this.remark = remark;
	}

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

	public List<SaleItem> getSaleItem() {
		return saleItem;
	}

	public void setSaleItem(List<SaleItem> saleItem) {
		this.saleItem = saleItem;
	}
	
	

}
