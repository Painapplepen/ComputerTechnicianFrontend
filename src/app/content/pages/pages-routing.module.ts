import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "src/app/core/guard/admin.guard";
import { AuthGuard } from "src/app/core/guard/auth.guard";
import { ClientGuard } from "src/app/core/guard/user.guard";
import { EditManafactureComponent } from "./manafacture-page/edit-manafacture/edit-manafacture.component";
import { ManafacturePageComponent } from "./manafacture-page/manafacture-page.component";
import { EditOrderComponent } from "./order-page/edit-order/edit-order.component";
import { OrderPageComponent } from "./order-page/order-page.component";
import { PagesComponent } from "./pages.component";
import { EditProductComponent } from "./product-page/edit-product/edit-product.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { EditSupplierComponent } from "./supplier-page/edit-supplier/edit-supplier.component";
import { SupplierPageComponent } from "./supplier-page/supplier-page.component";
import { EditUserComponent } from "./user-page/edit-user/edit-user.component";
import { UserPageComponent } from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {path: "", redirectTo: "", pathMatch: "full"},
      {path: "manafacture", component: ManafacturePageComponent, canActivate: [AdminGuard]},
      {path: "edit-manafacture", component: EditManafactureComponent, canActivate: [AdminGuard]},
      {path: "product", component: ProductPageComponent, canActivate: [AdminGuard]},
      {path: "edit=product", component: EditProductComponent, canActivate: [AdminGuard]},
      {path: "order", component: OrderPageComponent, canActivate: [AdminGuard]},
      {path: "edit-order", component: EditOrderComponent, canActivate: [AdminGuard]},
      {path: "supplier", component: SupplierPageComponent, canActivate: [AdminGuard]},
      {path: "edit-supplier", component: EditSupplierComponent, canActivate: [AdminGuard]},
      {path: "user", component: UserPageComponent, canActivate: [AdminGuard]},
      {path: "edit-user", component: EditUserComponent, canActivate: [AdminGuard]},
      {path: "profile", component: ProfilePageComponent, canActivate: [ClientGuard] }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class PagesRoutingModule {
}
