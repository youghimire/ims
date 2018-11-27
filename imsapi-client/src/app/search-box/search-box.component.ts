import { Component, OnInit } from '@angular/core';
import{ HttpClient  } from '@angular/common/http'
import { ConfigService } from '../config/config.service';
import { Item } from '../interfaces';
import { ItemService } from '../item.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  items$: Observable<Item[]>;
  private searchTerm = new Subject<string>();

  constructor( 
    private itemService : ItemService,
    private router: Router) { }

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

  addItem() {
    this.router.navigateByUrl('/addItem');
  }

  sellLog(){
    this.router.navigateByUrl('/dayBook');
  }

  allProducts() {
    this.router.navigateByUrl('/allItem')
  }

}
