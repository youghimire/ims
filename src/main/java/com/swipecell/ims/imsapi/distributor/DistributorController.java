package com.swipecell.ims.imsapi.distributor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DistributorController {

	@Autowired
	private DistributorService distributorService;

	@RequestMapping("/distributors")
	public List<Distributor> getAllItem() {
		return distributorService.getAllItem();
	}

	@RequestMapping("/distributors/{id}")
	public Distributor getDistributor(@PathVariable Integer id) {
		return distributorService.getDistributor(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/distributors")
	public void addDistributor(@RequestBody Distributor distributor) {
		distributorService.addDistributor(distributor);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/distributors/{id}")
	public void updateDistributor(@RequestBody Distributor distributor) {
		distributorService.updateDistributor(distributor);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/distributors/{id}")
	public void deleteDistributor(@PathVariable Integer id) {
		distributorService.deleteDistributor(id);
	}
}
