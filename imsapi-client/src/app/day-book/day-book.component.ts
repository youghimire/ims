import { Component, OnInit } from '@angular/core';
import { SellService } from '../sell.service';
import { Sale } from '../interfaces';

@Component({
  selector: 'app-day-book',
  templateUrl: './day-book.component.html',
  styleUrls: ['./day-book.component.css']
})
export class DayBookComponent implements OnInit {

  headElements = ["#", "Item", "Amount"];
  allSales : Sale[];
  constructor(
    private saleService : SellService
  ) { }

  ngOnInit() {

    this.getSales();
  }

  getSales() {
    this.saleService.getTodaysSell()
    .subscribe(sales => this.allSales = sales)
  }
}
