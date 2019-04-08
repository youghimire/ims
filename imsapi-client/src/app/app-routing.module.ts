import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ItemComponent } from './item/item.component';
import { DayBookComponent } from './day-book/day-book.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { DistributorComponent } from './distributor/distributor.component';
import { PurchaseTableComponent } from './purchase-table/purchase-table.component';
import { TestComponent } from './test/test.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { SellTableComponent } from './sell-table/sell-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/productTable', pathMatch: 'full'},

  {path: 'addItem', component: ItemComponent},
  {path: 'editItem/:id', component: ItemComponent},
  {path: 'productTable', component: ProductTableComponent},
  {path: 'allItem', component: ProductListComponent},
  {path: 'search', component: SearchBoxComponent},

  {path: 'distributor', component: DistributorComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'purchaseTable', component: PurchaseTableComponent},

  {path: 'sell', component: SellComponent },
  {path: 'sell/:id', component: SellComponent},    
  {path: 'dayBook', component: DayBookComponent},
  {path: 'sellTable', component: SellTableComponent},
  
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
