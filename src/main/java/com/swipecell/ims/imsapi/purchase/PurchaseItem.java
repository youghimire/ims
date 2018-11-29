package com.swipecell.ims.imsapi.purchase;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.swipecell.ims.imsapi.item.Item;

@Entity
public class PurchaseItem {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Integer quantity;
	private BigDecimal amount;

	@ManyToOne
	@JoinColumn(name="purchase_id")
	@JsonIgnore
	private Purchase purchase;
	@ManyToOne
	@JoinColumn(name="item_id")
	private Item item;
	
	public PurchaseItem() {
		super();
	}

	public PurchaseItem(Integer id, Purchase purchase, Item item, Integer quantity, BigDecimal amount) {
		super();
		this.id = id;
		this.purchase = purchase;
		this.item = item;
		this.quantity = quantity;
		this.amount = amount;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Purchase getPurchase() {
		return purchase;
	}

	public void setPurchase(Purchase purchase) {
		this.purchase = purchase;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
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

}
