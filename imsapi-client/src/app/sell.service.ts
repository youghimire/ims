import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Sale, SaleItem, Item } from './interfaces';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class SellService {

  private salesURL = 'api/sales';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  saveSale(sale : Sale, item: Item): Observable<Sale> {
    return this.http.post<Sale>(this.salesURL, sale).pipe(
      tap(_ => this.log(`Saved Item =${sale.billName}`)),
      catchError(this.handleError<Sale>(`saveItem name: ${sale.billName}`))
    );
  }


getTodaysSell(): Observable<Sale[]> {

  return this.http.get<Sale[]>(this.salesURL).pipe(
    tap(_ => this.log(`Fetched sales `)),
    catchError(this.handleError<Sale[]>(`getTodaysSell `))
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
