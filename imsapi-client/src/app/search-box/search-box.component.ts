import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces';
import { ItemService } from '../item.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-box',
  template: `
  <span [formGroup]="parentForm">

  <input matInput #searchBox formControlName="item" placeholder="Item" [matAutocomplete]="auto" (input)="search(searchBox.value)">

  <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
    <mat-option *ngFor="let item of items$ | async" [value]="item">
      {{ item.name }}
     
    </mat-option>
  </mat-autocomplete>
</span>`
})

export class SearchBoxComponent implements OnInit {

  @Input() parentForm: FormGroup
  items$: Observable<Item[]>;
  private searchTerm = new Subject<string>();

  constructor(private itemService: ItemService) {

  }

  search(term: string): void {
    this.searchTerm.next(term);
  }
  ngOnInit() {
    this.items$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }

  displayFn(item: Item) {
    if (item) { return item.name; }
  }

}
