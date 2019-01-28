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

const routes: Routes = [
  {path: 'sell', component: SellComponent },
  {path: 'sell/:id', component: SellComponent},
  {path: 'search', component: SearchBoxComponent},
  {path: '', redirectTo: '/dayBook', pathMatch: 'full'},
  {path: 'addItem', component: ItemComponent},
  {path: 'editItem/:id', component: ItemComponent},
  {path: 'dayBook', component: DayBookComponent},
  {path: 'allItem', component: ProductListComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'distributor', component: DistributorComponent},
  {path: 'purchaseTable', component: PurchaseTableComponent},
  {path: 'test', component: TestComponent},
  {path: 'productTable', component: ProductTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
