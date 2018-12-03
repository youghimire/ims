package com.swipecell.ims.imsapi.purchase;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swipecell.ims.imsapi.item.ItemService;

@Service
public class PurchaseService {

	@Autowired
	private PurchaseRepository purchaseRepository;
	@Autowired
	private PurchaseItemRepository purchaseItemRepository;
	@Autowired
	private ItemService itemService;

	public List<Purchase> getAllPurchase() {
		List<Purchase> purchases = new ArrayList<>();
		purchaseRepository.findAll().forEach(purchases::add);
		return purchases;
	}

	public Purchase getPurchase(Integer id) {
		return purchaseRepository.findOne(id);
	}

	public void addOrUpdatePurchase(Purchase purchase) {

		if (purchase.getId() != null && purchaseRepository.findOne(purchase.getId()) != null) {
			System.out.println("Purchase will be updated " + purchase.getId());
		} else {
			System.out.println("Purchase will be added");
		}

		if (purchase.getDate() == null) {
			purchase.setDate(new Date());
		}
		List<PurchaseItem> purchaseItems = purchase.getPurchaseItems();
		purchase = purchaseRepository.save(purchase);
		
		BigDecimal totalAmount = BigDecimal.ZERO;
		for (PurchaseItem purchaseItem : purchaseItems) {
			if ( purchaseItem.getItem().getId() == null) {
				itemService.updateOrSave(null, purchaseItem.getItem());
			}
			purchaseItem.setPurchase(purchase);
			totalAmount = totalAmount.add(purchaseItem.getAmount().multiply(new BigDecimal(purchaseItem.getQuantity())));
			purchaseItem = purchaseItemRepository.save(purchaseItem);
		}
		purchase.setAmount(totalAmount);
		purchase = purchaseRepository.save(purchase);

	}

	public void deletePurchase(Integer id) {

		purchaseRepository.delete(id);

	}

}
