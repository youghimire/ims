import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaleItem } from '../interfaces';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  saleItemForm: FormGroup;
  saleItem: SaleItem;
  constructor(
    fb: FormBuilder,
    private http: HttpClient
  ) { 
    this.saleItemForm = fb.group({
      quantity: '',
      amount: '',
      remark: '',
      item: null
      
    })
  }

  ngOnInit() {
  }

  save() {
    this.saleItem = Object.assign({}, this.saleItemForm.value);
    this.http.post<SaleItem>("/api/saleItems", this.saleItem, httpOptions).subscribe(value => console.log(value))
  }

}
