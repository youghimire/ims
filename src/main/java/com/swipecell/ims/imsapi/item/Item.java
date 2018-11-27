package com.swipecell.ims.imsapi.item;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.swipecell.ims.imsapi.sales.SaleItem;


@Entity
public class Item {

	
	private Integer id;
	private String name;
	private String description;
	private Integer stock;
	
	@JsonIgnore
	private Set<SaleItem> saleItems;
	
	
	
	public Item() {
		
	}
	public Item( String name, String description, Integer stock) {
		
		this.name = name;
		this.description = description;
		this.stock = stock;
		this.saleItems = new HashSet<>();
	}
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getStock() {
		return stock;
	}
	public void setStock(Integer stock) {
		this.stock = stock;
	}
	@OneToMany(mappedBy="item")
	public Set<SaleItem> getSaleItems() {
		return saleItems;
	}
	public void setSaleItems(Set<SaleItem> saleItems) {
		this.saleItems = saleItems;
	}
	
	
}
