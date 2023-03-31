import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { BuyCrudComponent } from "./views/buy-crud/buy-crud.component";
import { FinanceComponent } from "./views/finance/finance.component";


const routes: Routes = [
  {
    path: "anything",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {
    path: "buy",
    component: BuyCrudComponent,
    
  },
  {
    path: "finance",
    component: FinanceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
