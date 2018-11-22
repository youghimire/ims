package com.swipecell.ims.imsapi.sales;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SaleItemController {

	@Autowired
	private SaleItemService saleService;
	


	@RequestMapping("/saleItems/{id}")
	public SaleItem getSaleItem(@PathVariable Integer id) {
		return saleService.getSaleItem(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/saleItems")
	public void addSaleItem(@RequestBody SaleItem saleItem) {
		saleService.addSaleItem(saleItem);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/saleItems/{id}")
	public void updateSaleItem(@RequestBody SaleItem sale, @PathVariable Integer id) {
		saleService.updateSaleItem(sale);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/saleItems/{id}")
	public void deleteSaleItem(@PathVariable Integer id) {
		saleService.deleteSaleItem(id);
	}
}
