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

  constructor(private itemService: ItemService) {

  }

  ngOnInit() {

  }
}
