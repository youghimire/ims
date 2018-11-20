package com.swipecell.ims.imsapi.purchase;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface PurchaseItemRepository extends CrudRepository<PurchaseItem, Integer> {

	public List<PurchaseItem> findByPurchaseId(Integer purchaseId);
}
