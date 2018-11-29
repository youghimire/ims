import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import {  Distributor, Purchase } from './interfaces';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private distributorUrl = "/api/distributors";
  private purchaseUrl = "/api/purchases";
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

    savePurchase(purchase: Purchase) {
      this.http.post<Purchase>(this.purchaseUrl, purchase, httpOptions).pipe(
        tap(_ => this.log(`Saved Purchase ${purchase.amount}`)),
        catchError(this.handleError<Purchase>(`savePurchase: ${purchase.amount}`))
      ).subscribe(()=>{}
      )
    }
    saveDistributor(distributor: Distributor) {
      this.http.post<Distributor>(this.distributorUrl, distributor, httpOptions).pipe(
        tap(_ => this.log(`Saved Distributor ${distributor.name}`)),
        catchError(this.handleError<Distributor>(`saveDistributor: ${distributor.name}`))
      ).subscribe(()=>{})
    }

    getDistributors(): Observable<Distributor[]> {
      return this.http.get<Distributor[]>(this.distributorUrl).pipe(
        tap(_ => this.log(`fetched all Distributor`)),
        catchError(this.handleError<Distributor[]>(`getDistributors`))
      );
    }

    private log(message: string) {
      this.messageService.add(`Purchase service: ${message}`);
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
}
