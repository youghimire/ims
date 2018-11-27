package com.swipecell.ims.imsapi.sales;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaleService {

	@Autowired
	private SaleRepository saleRepository;
	@Autowired
	private SaleItemRepository saleItemRepository;

	public List<Sale> getAllSale() {
		List<Sale> sales = new ArrayList<>();
		saleRepository.findAll().forEach(sales::add);
		return sales;
	}

	public Sale getSale(Integer id) {
		return saleRepository.findOne(id);
	}

	public Sale addSale(Sale sale) {
		if (sale.getDate() == null) {
			sale.setDate(new Date());
		}
		Set<SaleItem> saleItems = sale.getSaleItems();
		sale.setSaleItems(new HashSet<>());
		Sale result = saleRepository.save(sale);
		for (SaleItem saleItem : saleItems) {
			if (saleItem.getQuantity() == null) {
				saleItem.setQuantity(1);
			}
			if (saleItem.getAmount() == null) {
				saleItem.setAmount(sale.getAmount());
			}
			saleItem.setSale(result);
			saleItem = saleItemRepository.save(saleItem);
			sale.getSaleItems().add(saleItem);
		}
		return result;
	}

	public Sale updateSale(Sale sale) {

		return saleRepository.save(sale);
	}

	public void deleteSale(Integer id) {

		saleRepository.delete(id);

	}

}
