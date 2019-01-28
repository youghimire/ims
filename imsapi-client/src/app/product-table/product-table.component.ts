import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProductTableDataSource } from './product-table-datasource';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProductTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'stock'];

  constructor( private itemService: ItemService) {

  }
  ngOnInit() {
    this.dataSource = new ProductTableDataSource(this.itemService, this.paginator, this.sort);
  }
}
