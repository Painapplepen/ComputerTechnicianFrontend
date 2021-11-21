import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ManafacturePageComponent } from './manafacture-page/manafacture-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    PagesComponent,
    ManafacturePageComponent,
    OrderPageComponent,
    ProductPageComponent,
    ProfilePageComponent,
    SupplierPageComponent,
    UserPageComponent
  ],
  imports: [
    PagesRoutingModule
  ],
  providers: []
})
export class PagesModule { }
