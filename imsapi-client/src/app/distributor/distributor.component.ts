import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { Distributor } from '../interfaces';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {

  form: FormGroup;
  distributor: Distributor;
  constructor(
    private formBuilder : FormBuilder,
    private purchaseService: PurchaseService
  ) { 
    this.form = this.generateForm();
  }

  ngOnInit() {
  }

  generateForm() {
    return this.formBuilder.group ( {
      id: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      panOrVatNo: ''
    })
  }

  save() {
    this.distributor = Object.assign({}, this.form.value);
    this.purchaseService.saveDistributor(this.distributor);
    this.form.reset();
  }

}
