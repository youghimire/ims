import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, merge } from 'rxjs';
import { Purchase } from '../interfaces';
import { PurchaseService } from '../purchase.service';
import { OnInit } from '@angular/core';
import {from} from 'rxjs/observable/from'


/**
 * Data source for the PurchaseTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PurchaseTableDataSource extends DataSource<Purchase> {

  data: Observable<Purchase[]> = this.purchaseService.getPurchases();
  dataArray : Purchase[];
  constructor(private paginator: MatPaginator, private sort: MatSort, private purchaseService: PurchaseService) {
    super();
  }
  getData() {
    
    this.data.forEach(element => {
     
     this.dataArray= element;
   })
   
   }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     
   }
   /**
    * Connect this data source to the table. The table will only update when
    * the returned stream emits new items.
    * @returns A stream of the items to be rendered.
    */
   connect(): Observable<Purchase[]> {
     
     this.getData();
     // Combine everything that affects the rendered data into one update
     // stream for the data-table to consume.
     const dataMutations = [
      this.data,
       this.paginator.page,
       this.sort.sortChange
     ];
 
     // Set the paginator's length
     this.paginator.length = 20;
 
     return merge(...dataMutations).pipe(map(() => {
       return this.getPagedData(this.getSortedData([...this.dataArray]));
     }));
   }
 
 
   /**
    *  Called when the table is being destroyed. Use this function, to clean up
    * any open connections or free any held resources that were set up during connect.
    */
   disconnect() {}
 
   /**
    * Paginate the data (client-side). If you're using server-side pagination,
    * this would be replaced by requesting the appropriate data from the server.
    */
   private getPagedData(data: Purchase[]) {
     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
     return data.splice(startIndex, this.paginator.pageSize);
   }
 
   /**
    * Sort the data (client-side). If you're using server-side sorting,
    * this would be replaced by requesting the appropriate data from the server.
    */
   private getSortedData(data: Purchase[]) {
     if (!this.sort.active || this.sort.direction === '') {
       return data;
     }
 
     return data.sort((a, b) => {
       let column = this.sort.active;
       let valuea = a[column];
       let valueb = b[column];
       const isAsc = this.sort.direction === 'asc';
          console.log(typeof valuea)
         if (typeof valuea === "number") {
           return compare(+valuea, +valueb, isAsc);
         } else {
           
           return compare( valuea, valueb, isAsc);
         }
        
     });
   }
 }
 
 /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
 function compare(a, b, isAsc) {
   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
 }
 