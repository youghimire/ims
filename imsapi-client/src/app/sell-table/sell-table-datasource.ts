import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Sale } from '../interfaces';
import { SellService } from '../sell.service';
import { connect } from 'http2';

/**
 * Data source for the SellTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SellTableDataSource extends DataSource<Sale> {
  data: Observable<Sale[]> = this.sellService.getTodaysSell();
  dataArray : Sale[] = new Array<Sale>();
  dayBook: boolean = false;
 
   constructor(private sellService: SellService, private paginator: MatPaginator, private sort: MatSort) {
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
   connect(): Observable<Sale[]> {
     
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
 
   isTodaysSale(sale: Sale) {
    
     if ( sale.date ) {
     return sale.date.toDateString() === new Date().toDateString();
     }
     return false;
   }

   filter() {
    // if ( this.dayBook) {
    //   return this.data.filter(this.isTodaysSale);
    // }
    // return data;
   }
   dayBookToggle() {
    this.dayBook = !this.dayBook;
    this.connect();
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
   private getPagedData(data: Sale[]) {
     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
     return data.splice(startIndex, this.paginator.pageSize);
   }
 
   /**
    * Sort the data (client-side). If you're using server-side sorting,
    * this would be replaced by requesting the appropriate data from the server.
    */
   private getSortedData(data: Sale[]) {
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