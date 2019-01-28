import { Component, OnInit } from '@angular/core';
import { Item, Sale, SaleItem } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SellService } from '../sell.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  saleForm: FormGroup;
  newSale: Sale;
  newSaleItem: SaleItem;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private sellService: SellService,
    private formBuilder: FormBuilder
  ) {
    this.saleForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return this.formBuilder.group({
      date: '',
      amount: ['', Validators.required],
      billName: '',
      remark: '',
      saleItems: this.formBuilder.array([
        this.createSaleItemForm()
      ])
    });
  }
  createSaleItemForm() {
    return this.formBuilder.group({
      quantity: ['1', Validators.required],
      amount: ['', Validators.required],
      remark: '',
      item: [null, Validators.required]
    })
  }

  save() {
    this.newSale = Object.assign({}, this.saleForm.value);

    this.sellService.saveSale(this.newSale)
      .subscribe(sale => {
        this.newSale = sale;
        this.router.navigateByUrl('/dayBook');
      });
  }

  addItem() {
    const saleItemsFormArray = this.saleForm.controls.saleItems as FormArray;
    saleItemsFormArray.push(this.createSaleItemForm());
  }
  delteItem(i: number) {
    const saleItemsFormArray = this.saleForm.controls.saleItems as FormArray;
    saleItemsFormArray.removeAt(i);
  }
  calculateTotal() {
    let total: number = 0;
    const saleItemsFormArray = <FormArray>this.saleForm.controls.saleItems;
    saleItemsFormArray.controls.forEach(function (saleItemForm) {
      total += +saleItemForm.get("amount").value * saleItemForm.get("quantity").value;

    })
    this.saleForm.controls.amount.setValue(total);
  }
}
