package com.swipecell.ims.imsapi.item;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.swipecell.ims.imsapi.item.Item;

@RestController
@RequestMapping("/api")
public class ItemController {

	@Autowired
	private ItemService itemService;

	@RequestMapping("/items")
	public List<Item> getAllItem() {
		System.out.println("get all items");
		return itemService.getAllItem();
	}

	@RequestMapping("/items/{id}")
	public Item getItem(@PathVariable Integer id) {
		return itemService.getItem(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/items")
	public void addItem(@RequestBody Item item) {
		System.out.println("add Purchase " + item.getName());
		itemService.addItem(item);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/items/{id}")
	public void updateItem(@RequestBody Item item, @PathVariable Integer id) {
		System.out.println("update Purchase " + item.getName());
		itemService.updateItem(item);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/items/{id}")
	public void deleteItem(@PathVariable Integer id) {
		System.out.println("delete Purchase " + id);
		itemService.deleteItem(id);
	}
	
	@RequestMapping(value = "/items/name={term}")
	public void searchItem(@PathVariable String term) {
		System.out.println("search Item with term " + term);
		itemService.searchItem(term);
	}
}