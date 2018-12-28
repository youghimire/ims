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
  item: Item;
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
    this.getItem();

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
  getItem(): void {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');

      this.itemService.getItem(id)
        .subscribe(item => this.item = item);
    }
  }

  save() {

    this.newSale = Object.assign({}, this.saleForm.value);
    if (this.newSale.saleItems) {
      console.log("saved")
      this.sellService.saveSale(this.newSale, this.item)
        .subscribe(sale => {
          this.newSale = sale;
          // this.router.navigateByUrl('/dayBook')});
        });
    } else {
      console.log("No sale")
    }
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
