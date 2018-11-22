package com.swipecell.ims.imsapi.sales;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaleService {

	@Autowired
	private SaleRepository saleRepository;

	public List<Sale> getAllSale() {
		List<Sale> sales = new ArrayList<>();
		saleRepository.findAll().forEach(sales::add);
		return sales;
	}

	public Sale getSale(Integer id) {
		return saleRepository.findOne(id);
	}

	public Sale addSale(Sale sale) {
		return saleRepository.save(sale);
	}

	public Sale updateSale(Sale sale) {

		return saleRepository.save(sale);
	}

	public void deleteSale(Integer id) {

		saleRepository.delete(id);

	}

}
