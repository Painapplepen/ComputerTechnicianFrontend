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
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthInterseptor } from "src/app/core/auth/auth.interseptor";
import { AuthService } from "src/app/core/auth/auth.service";
import { AuthGuard } from "src/app/core/guard/auth.guard";

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
    PagesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    
  ]
})
export class PagesModule { }
