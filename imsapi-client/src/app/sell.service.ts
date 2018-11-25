import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Sale, SaleItem } from './interfaces';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  private salesURL = 'api/sales';
  private saleItemURL = 'api/saleItems';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  saveSale(sale : Sale): Observable<Sale> {
    return this.http.post<Sale>(this.salesURL, sale).pipe(
      tap(_ => this.log(`Saved Item =${sale.billName}`)),
      catchError(this.handleError<Sale>(`saveItem name: ${sale.billName}`))
    );
  }

  saveSaleItem(saleItem : SaleItem): Observable<SaleItem> {
    return this.http.post<SaleItem>(this.saleItemURL, saleItem).pipe(
      tap(_ => this.log(`Saved Sale Item`)),
      catchError(this.handleError<SaleItem>(`saveSaleItem`))
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
