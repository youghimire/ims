import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PurchaseTableDataSource } from './purchase-table-datasource';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.css'],
})
export class PurchaseTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PurchaseTableDataSource;
  purchaseService: PurchaseService;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Item name', 'Price per unit', 'Quantity', 'Distributor', 'Invoice No'];

  ngOnInit() {
    this.dataSource = new PurchaseTableDataSource(this.paginator, this.sort, this.purchaseService);
  }
}
