import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import{catchError, map, tap} from 'rxjs/operators'
import { Item } from './item';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private itemsURL = 'api/items';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsURL);
  }

  searchItems(term: string): Observable<Item[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Item[]>(`${this.itemsURL}/name=${term}`).pipe(
      tap(_=> this.log(`found items matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
    )
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.itemsURL}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched Item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
