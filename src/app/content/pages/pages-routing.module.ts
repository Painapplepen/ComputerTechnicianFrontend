import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "src/app/core/guard/admin.guard";
import { AuthGuard } from "src/app/core/guard/auth.guard";
import { ClientGuard } from "src/app/core/guard/user.guard";
import { ManafacturePageComponent } from "./manafacture-page/manafacture-page.component";
import { OrderPageComponent } from "./order-page/order-page.component";
import { PagesComponent } from "./pages.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { SupplierPageComponent } from "./supplier-page/supplier-page.component";
import { UserPageComponent } from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {path: "", redirectTo: "", pathMatch: "full"},
      {path: "manafacture", component: ManafacturePageComponent, canActivate: [AdminGuard]},
      {path: "product", component: ProductPageComponent, canActivate: [AdminGuard]},
      {path: "order", component: OrderPageComponent, canActivate: [AdminGuard]},
      {path: "supplier", component: SupplierPageComponent, canActivate: [AdminGuard]},
      {path: "user", component: UserPageComponent, canActivate: [AdminGuard]},
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
