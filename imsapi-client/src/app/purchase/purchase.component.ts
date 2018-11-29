import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PAYMENT_METHOD, Distributor, Purchase, paymentMethods } from '../interfaces';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchaseForm: FormGroup;
  distributors: Distributor[];
  purchase : Purchase;
  paymentMethod = paymentMethods;

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private purchaseService: PurchaseService
  ) {
    this.purchaseForm = this.createPurchaseForm();
   }

  ngOnInit() {
    this.purchaseService.getDistributors()
    .subscribe(distributors=> this.distributors = distributors)
  }

  save() {
    this.purchase = Object.assign({}, this.purchaseForm.value);
    this.purchase.distributer as Distributor = {'id': ''};
    this.purchaseService.savePurchase(this.purchase);
  }
  createPurchaseForm() {
    return this.formBuilder.group({
      id: '',
      distributor: this.formBuilder.group({
        id:''
      }),
      invoiceNo: '',
      date: new Date(),
      amount: '',
      paymentMethod: '0',

      purchaseItems: this.formBuilder.array([
        this.createPurchaseItemForm()
      ])
    });
  }
  createPurchaseItemForm() {

   return this.formBuilder.group({
      id: '',
      quantity: '1',
      amount: '',
      purchase: '',
      item: ''})
  }
}
