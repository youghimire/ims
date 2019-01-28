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

  ngOnInit() {
   
  }


  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Purchase[]> {
    this.dataArray = this.getData(this.data);
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

  getData(purchases: Observable<Purchase[]>): Purchase[] {
    
    let data: Purchase[];
    purchases.subscribe(x=> {data= x});
    return data;
  }
  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

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
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'invoiceNo': return compare(a.invoiceNo, b.invoiceNo, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
