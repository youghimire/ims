import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allItems: Item[];
  headElements = ["#", "Name", "Stock", "Description"];
  
  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {

    this.itemService.getAllItems()
    .subscribe(items => this.allItems = items);
  }

}
