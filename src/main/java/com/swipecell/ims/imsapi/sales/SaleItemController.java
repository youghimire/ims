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
	private SaleItemService saleItemService;
	@Autowired
	private SaleService saleService;
	
	@RequestMapping("/saleItems")
	public List<SaleItem> getSaleItems() {
		return saleItemService.getAllSaleItem();
	}

	@RequestMapping("/saleItems/{id}")
	public SaleItem getSaleItem(@PathVariable Integer id) {
		return saleItemService.getSaleItem(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/saleItems")
	public SaleItem addSaleItem(@RequestBody SaleItem saleItem) {
		
		return saleItemService.addSaleItem(saleItem);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/saleItems/{id}")
	public void updateSaleItem(@RequestBody SaleItem sale, @PathVariable Integer id) {
		saleItemService.updateSaleItem(sale);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/saleItems/{id}")
	public void deleteSaleItem(@PathVariable Integer id) {
		saleItemService.deleteSaleItem(id);
	}
}
