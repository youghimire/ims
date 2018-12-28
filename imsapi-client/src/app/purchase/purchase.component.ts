import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PAYMENT_METHOD, Distributor, Purchase, paymentMethods, Item } from '../interfaces';
import { PurchaseService } from '../purchase.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { element } from 'protractor';

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

  items$: Observable<Item[]>;
  private searchTerm = new Subject<string>();
  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private purchaseService: PurchaseService
  ) {
    this.purchaseForm = this.createPurchaseForm();
   }

  ngOnInit() {
    this.purchaseService.getDistributors()
    .subscribe(distributors=> this.distributors = distributors);
    this.items$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }

  displayFn(item: Item) {
    if (item) { return item.name; }
  }
  
  save() {
    this.purchase = Object.assign({}, this.purchaseForm.value);
    this.purchase.purchaseItems.
    filter( purchaseItem => (typeof purchaseItem.item === "string")).
    forEach( purchaseItem => (purchaseItem.item = {"id": null, "name" : purchaseItem.item.toString(), "description": "", "stock": 1, "saleItems": null, "purchaseItems": null } 
      
    ));
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
      item: null})
  }
}
