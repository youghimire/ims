package com.swipecell.ims.imsapi.purchase;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseItemService {

	@Autowired
	private PurchaseItemRepository purchaseItemRepository;

	public List<PurchaseItem> getAllPurchaseItem() {
		List<PurchaseItem> purchasesItems = new ArrayList<>();
		purchaseItemRepository.findAll().forEach(purchasesItems::add);
		return purchasesItems;
	}

	public List<PurchaseItem> getAllPurchaseItem(Integer purchaseId) {
		return purchaseItemRepository.findByPurchaseId(purchaseId);
	}
	
	public PurchaseItem getPurchaseItem(Integer id) {
		return purchaseItemRepository.findOne(id);
	}

	public void addPurchaseItem(PurchaseItem purchaseItem) {
		purchaseItemRepository.save(purchaseItem);
	}

	public void updatePurchaseItem(PurchaseItem purchaseItem) {

		purchaseItemRepository.save(purchaseItem);
	}

	public void deletePurchaseItem(Integer id) {

		purchaseItemRepository.delete(id);

	}

	

}
