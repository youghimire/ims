import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Inventory Management System';
  items : Item[];
  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
     this.itemService.getItems()
    .subscribe(items => this.items = items);
  }
}
