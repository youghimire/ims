import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item} from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item :Item;
  itemForm : FormGroup;

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.itemForm = this.createFormGroup();
   }

  ngOnInit() {
    this.getItem();
      
  }

  setItemForEdit(item : Item) {
    this.item = item;
      this.itemForm.setValue(this.item);
  }
  getItem(): void {
    if ( this.route.snapshot.paramMap.has('id')) {

    const id = +this.route.snapshot.paramMap.get('id');
    
    this.itemService.getItem(id)
      .subscribe(item => this.setItemForEdit(item));
    }
  }
  createFormGroup() {
    return this.formBuilder.group({
      id: '',
      name: '',
      description: '',
      stock: '1'
     
    })
    
  }

  save() {
   this.item = Object.assign({}, this.itemForm.value);
   this.itemService.saveItem(this.item);
   this.itemForm.reset();
  }

}
