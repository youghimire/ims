package com.swipecell.ims.imsapi.sales;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaleItemService {

	@Autowired
	private SaleItemRepository saleItemRepository;

	public List<SaleItem> getAllSaleItem() {
		List<SaleItem> saleItems = new ArrayList<>();
		saleItemRepository.findAll().forEach(saleItems::add);
		return saleItems;
	}

	public SaleItem getSaleItem(Integer id) {
		return saleItemRepository.findOne(id);
	}

	public SaleItem addSaleItem(SaleItem saleItem) {
		return saleItemRepository.save(saleItem);
	}

	public void updateSaleItem(SaleItem saleItem) {

		saleItemRepository.save(saleItem);
	}

	public void deleteSaleItem(Integer id) {

		saleItemRepository.delete(id);

	}

}
