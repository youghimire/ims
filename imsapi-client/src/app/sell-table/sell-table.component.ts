import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SellTableDataSource } from './sell-table-datasource';
import { SellService } from '../sell.service';

@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.css'],
})
export class SellTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SellTableDataSource;

  constructor(private sellService: SellService) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'remark', 'amount'];

  ngOnInit() {
    this.dataSource = new SellTableDataSource(this.sellService, this.paginator, this.sort);
  }

}
