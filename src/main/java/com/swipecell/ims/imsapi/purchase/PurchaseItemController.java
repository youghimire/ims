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
public class PurchaseItemController {

	@Autowired
	private PurchaseItemService purchaseItemService;

	@RequestMapping("/purchase/{purchaseId}/purchaseItems")
	public List<PurchaseItem> getAllPurchaseItem(@PathVariable Integer purchaseId) {
		return purchaseItemService.getAllPurchaseItem(purchaseId);
	}

	@RequestMapping("/purchaseItems/{id}")
	public PurchaseItem getPurchaseItem(@PathVariable Integer id) {
		return purchaseItemService.getPurchaseItem(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/purchaseItems")
	public void addPurchaseItem(@RequestBody PurchaseItem purchaseItem) {
		purchaseItemService.addPurchaseItem(purchaseItem);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/purchaseItems/{id}")
	public void updatePurchaseItem(@RequestBody PurchaseItem purchaseItem, @PathVariable Integer id) {
		purchaseItemService.updatePurchaseItem(purchaseItem);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/purchaseItems/{id}")
	public void deletePurchaseItem(@PathVariable Integer id) {
		purchaseItemService.deletePurchaseItem(id);
	}
}
