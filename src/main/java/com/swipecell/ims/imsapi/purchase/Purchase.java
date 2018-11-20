package com.swipecell.ims.imsapi.purchase;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.swipecell.ims.imsapi.distributor.Distributor;

@Entity
public class Purchase {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@OneToOne
	private Distributor distributor;
	private String invoiceNo;
	
	private Date date;
	private BigDecimal amount;
	private Integer paymentMethod;
	
	static final int PAYMENT_BY_CASH = 0;
	static final int PAYMENT_BY_CHEQUE = 1;
	static final int PAYMENT_BY_AFTER_SALES_CASH = 2;

	public Purchase() {

	}

	
	public Purchase(Integer id, Distributor distributor, String invoiceNo, Date date, BigDecimal amount,
			Integer paymentMethod) {
		super();
		this.id = id;
		this.distributor = distributor;
		this.invoiceNo = invoiceNo;
		this.date = date;
		this.amount = amount;
		this.paymentMethod = paymentMethod;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Distributor getDistributor() {
		return distributor;
	}

	public void setDistributor(Distributor distributor) {
		this.distributor = distributor;
	}

	public String getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(String invoiceNo) {
		this.invoiceNo = invoiceNo;
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

	public Integer getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(Integer paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	

	

}