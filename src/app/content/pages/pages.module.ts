import { NgModule } from "@angular/core";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ManafacturePageComponent } from './manafacture-page/manafacture-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { EditManafactureComponent } from "./manafacture-page/edit-manafacture/edit-manafacture.component";
import { EditProductComponent } from './product-page/edit-product/edit-product.component';
import { EditOrderComponent } from './order-page/edit-order/edit-order.component';
import { EditSupplierComponent } from './supplier-page/edit-supplier/edit-supplier.component';
import { EditUserComponent } from './user-page/edit-user/edit-user.component';

@NgModule({
  declarations: [
    PagesComponent,
    ManafacturePageComponent,
    OrderPageComponent,
    ProductPageComponent,
    ProfilePageComponent,
    SupplierPageComponent,
    UserPageComponent,
    EditManafactureComponent,
    EditProductComponent,
    EditOrderComponent,
    EditSupplierComponent,
    EditUserComponent
  ],
  imports: [
    PagesRoutingModule
  ],
  providers: []
})
export class PagesModule { }
