package com.swipecell.ims.imsapi.item;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
public class ItemService {

	@Autowired
	private ItemRepository itemRepository;

	public List<Item> getAllItem() {
		List<Item> items = new ArrayList<>();
		itemRepository.findAll().forEach(items::add);
		return items;
	}
	
	public List<Item> searchItem(String term) {
		
		List<Item> items = new ArrayList<>();
		itemRepository.findAll().forEach(items::add);
		List<Item> matchingItems = new ArrayList<>();
		if ( StringUtils.isEmpty(term)) {
			return items;
		}
		
			for ( Item item : items ) {
				StringTokenizer tokens = new StringTokenizer(item.getName());
				while (tokens.hasMoreElements()) {
					String token = (String) tokens.nextElement();
					if ( token.toLowerCase().startsWith(term.toLowerCase())) {
						matchingItems.add(item);
						break;
					}
					
				}
			}
			System.out.println("found matching " + matchingItems.size());
		return matchingItems;
	}

	public Item getItem(Integer id) {
		return itemRepository.findOne(id);
	}

	public void deleteItem(Integer id) {

		itemRepository.delete(id);

	}

	public void updateOrSave(Integer id, Item item) {
		if ( id != null && itemRepository.findOne(id) != null ) {
			System.out.println("Item updated " + id);
		} else {
			System.out.println("Item inserted");
		}
		itemRepository.save(item);
		
	}

}
