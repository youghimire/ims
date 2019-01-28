import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreNameComponent } from './store-name/store-name.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SellComponent } from './sell/sell.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';
import { DayBookComponent } from './day-book/day-book.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { DistributorComponent } from './distributor/distributor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseTableComponent } from './purchase-table/purchase-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule,
   MatAutocompleteModule, MatFormFieldModule, MatButtonModule, MatSidenav, MatSidenavModule, MatListModule } from '@angular/material';
import { TestComponent } from './test/test.component';
import { ProductTableComponent } from './product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreNameComponent,
    SearchBoxComponent,
    MessageComponent,
    SellComponent,
    ItemComponent,
    DayBookComponent,
    ProductListComponent,
    PurchaseComponent,
    DistributorComponent,
    PurchaseTableComponent,
    TestComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
