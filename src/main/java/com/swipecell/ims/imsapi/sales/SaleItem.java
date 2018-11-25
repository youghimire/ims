package com.swipecell.ims.imsapi.sales;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.swipecell.ims.imsapi.item.Item;

@Entity
public class SaleItem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private Integer quantity;
	private BigDecimal amount;
	private String remark;

	@OneToOne
	private Item item;

	@ManyToOne
	@JoinColumn(name="sale_id", nullable=false)
	private Sale sale;
	

	public SaleItem() {
		super();
	}

	public SaleItem(Integer id, Integer quantity, BigDecimal amount, String remark, Item item) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.amount = amount;
		this.remark = remark;
		this.item = item;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}


}
