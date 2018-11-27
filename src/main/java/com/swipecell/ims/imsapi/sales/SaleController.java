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
public class SaleController {

	@Autowired
	private SaleService saleService;

	@Autowired
	private SaleItemService saleItemService;
	
	@RequestMapping("/sales")
	public List<Sale> getAllSale() {
		return saleService.getAllSale();
	}

	@RequestMapping("/sales/{id}")
	public Sale getSale(@PathVariable Integer id) {
		return saleService.getSale(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/sales")
	public Sale addSale(@RequestBody Sale sale) {
		System.out.println("Add sale record : " + sale);
		return saleService.addSale(sale);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/sales/{id}")
	public Sale updateSale(@RequestBody Sale sale, @PathVariable Integer id) {
		return saleService.updateSale(sale);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/sales/{id}")
	public void deleteSale(@PathVariable Integer id) {
		saleService.deleteSale(id);
	}
}
