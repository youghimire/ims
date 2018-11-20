package com.swipecell.ims.imsapi.purchase;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PurchaseController {

	@Autowired
	private PurchaseService purchaseService;

	@RequestMapping("/purchases")
	public List<Purchase> getAllPurchase() {
		return purchaseService.getAllPurchase();
	}

	@RequestMapping("/purchases/{id}")
	public Purchase getPurchase(@PathVariable Integer id) {
		return purchaseService.getPurchase(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/purchases")
	public void addPurchase(@RequestBody Purchase purchase) {
		purchaseService.addPurchase(purchase);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/purchases/{id}")
	public void updatePurchase(@RequestBody Purchase purchase, @PathVariable Integer id) {
		purchaseService.updatePurchase(purchase);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/purchases/{id}")
	public void deletePurchase(@PathVariable Integer id) {
		purchaseService.deletePurchase(id);
	}
}
