import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ItemComponent } from './item/item.component';
import { DayBookComponent } from './day-book/day-book.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { DistributorComponent } from './distributor/distributor.component';

const routes: Routes = [
  { path: 'sell', component: SellComponent },
  {path: 'sell/:id', component: SellComponent},
  {path: 'search', component: SearchBoxComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'addItem', component: ItemComponent},
  {path: 'editItem/:id', component: ItemComponent},
  {path: 'dayBook', component: DayBookComponent},
  {path: 'allItem', component: ProductListComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'distributor', component: DistributorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
