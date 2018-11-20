package com.swipecell.ims.imsapi.purchase;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseService {

	@Autowired
	private PurchaseRepository purchaseRepository;

	public List<Purchase> getAllPurchase() {
		List<Purchase> purchases = new ArrayList<>();
		purchaseRepository.findAll().forEach(purchases::add);
		return purchases;
	}

	public Purchase getPurchase(Integer id) {
		return purchaseRepository.findOne(id);
	}

	public void addPurchase(Purchase purchase) {
		purchaseRepository.save(purchase);
	}

	public void updatePurchase(Purchase purchase) {

		purchaseRepository.save(purchase);
	}

	public void deletePurchase(Integer id) {

		purchaseRepository.delete(id);

	}

}
