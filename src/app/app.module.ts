import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListingComponent } from './features/products/product-listing/product-listing.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { NotFoundErrorComponent } from './core/not-found-error/not-found-error.component';

import { FilterComponent } from './shared/filter/filter.component';
import { FooterComponent } from './core/footer/footer.component';
import { UpperHeaderComponent } from './core/header/upper-header/upper-header.component';
import { MiddleHeaderComponent } from './core/header/middle-header/middle-header.component';
import { LowerHeaderComponent } from './core/header/lower-header/lower-header.component';
import { FullHeaderComponent } from './core/header/full-header/full-header.component';
import { ProductService } from './features/products/product.service';
import { CategoryService } from './_services/category.service';
import { PaymentTypeService } from './_services/payment-Type.service';
import { BtnComponent } from './shared/btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductListingComponent,
    DropdownComponent,
    AddProductComponent,
    NotFoundErrorComponent,
    FilterComponent,
    FooterComponent,
    UpperHeaderComponent,
    MiddleHeaderComponent,
    LowerHeaderComponent,
    FullHeaderComponent,
    BtnComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'products',component:ProductListingComponent
          },
          {
            path:'',component:ProductListingComponent
          },
          {
            path:'products/add',component:AddProductComponent
          }
        ,{
          path:'**',component:NotFoundErrorComponent
        }]),
   ],
  providers: [ProductService,
  CategoryService,
PaymentTypeService],
  bootstrap: [AppComponent]

})
export class AppModule { }
