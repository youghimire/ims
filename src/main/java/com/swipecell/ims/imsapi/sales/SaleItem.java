package com.swipecell.ims.imsapi.sales;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

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
	@JoinColumn(name="item_id")
	private Item item;

	@ManyToOne
	@JoinColumn(name="sale_id")
	private Sale sale;

	public SaleItem() {
		super();
	}

	public SaleItem(Integer id, Integer quantity, BigDecimal amount, String remark, Item item,
			Sale sale) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.amount = amount;
		this.remark = remark;
		this.item = item;
		this.sale = sale;
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

	public Sale getSale() {
		return sale;
	}

	public void setSale(Sale sale) {
		this.sale = sale;
	}

}
