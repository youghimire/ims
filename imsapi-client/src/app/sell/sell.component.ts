import { Component, OnInit } from '@angular/core';
import { Item, Sale, SaleItem } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellService } from '../sell.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  billingForm: FormGroup;
  item: Item;
  newSale: Sale;
  newSaleItem: SaleItem;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private sellService: SellService,
    private formBuilder: FormBuilder
  ) {
    this.billingForm = this.createFormGroup();
  }

  ngOnInit() {
    this.getItem();

  }

  createFormGroup() {
    return this.formBuilder.group({
      billName: '',
      amount: ['', Validators.required],
      remark: ''
    })
  }
  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);

  }

  save() {
    
    this.newSaleItem = Object.assign({},this.billingForm.value) ;
    this.newSaleItem.item = this.item;
    this.newSaleItem.quantity = 1;
    
    // this.newSale.saleItem.push(this.newSaleItem);
    this.sellService.saveSaleItem(this.newSaleItem)
    .subscribe(saleItem => this.newSaleItem = saleItem);
    
    this.newSale = Object.assign({}, this.billingForm.value);
    this.newSale.date = new Date();
    this.newSale.saleItem = new Array<SaleItem>();
    this.sellService.saveSale(this.newSale)
    .subscribe(sale => this.newSale = sale);
    

    console.log(this.newSaleItem);
    console.log(this.newSale);
  }
}