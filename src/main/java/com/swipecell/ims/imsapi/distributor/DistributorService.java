package com.swipecell.ims.imsapi.distributor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DistributorService {

	@Autowired
	private DistributorRepository distributorRepository;

	public List<Distributor> getAllItem() {
		List<Distributor> distributor = new ArrayList<>();
		distributorRepository.findAll().forEach(distributor::add);
		return distributor;
	}

	public Distributor getDistributor(Integer id) {
		return distributorRepository.findOne(id);
	}

	public void addDistributor(Distributor distributor) {
		distributorRepository.save(distributor);
	}

	public void updateDistributor(Distributor distributor) {

		distributorRepository.save(distributor);
	}

	public void deleteDistributor(Integer id) {

		distributorRepository.delete(id);

	}

}
