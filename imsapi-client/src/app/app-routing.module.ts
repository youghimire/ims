import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './sell/sell.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: 'sell', component: SellComponent },
  {path: 'sell/:id', component: SellComponent},
  {path: 'search', component: SearchBoxComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'addItem', component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
