import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../interfaces';
import { PurchaseTableDataSource } from './purchase-table-datasource';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.css'],
})
export class PurchaseTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  dataSource : PurchaseTableDataSource;
  

  displayedColumns = ['name', 'amount', 'quantity', 'date', 'distributor', 'invoiceNo'];

  constructor(private purchaseService: PurchaseService){}

  ngOnInit() {
    console.log("on init")
    this.dataSource = new PurchaseTableDataSource(this.paginator, this.sort, this.purchaseService);
  
  }

}
