import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item} from '../interfaces';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  newItem :Item;
  newItemForm : FormGroup;

  constructor(
    private itemService: ItemService,
    private formBuilder: FormBuilder
  ) {
    this.newItemForm = this.createFormGroup();
   }

  ngOnInit() {
    
  }

  createFormGroup() {
    return this.formBuilder.group({
      
      name: '',
      description: '',
      stock: '1'
     
    })
    
  }

  save() {
   this.newItem = Object.assign({}, this.newItemForm.value);
   this.itemService.saveItem(this.newItem);
  }

}
