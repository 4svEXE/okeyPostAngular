import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/pages/home/home.component";
import { HowToBuyComponent } from "./views/pages/how-to-buy/how-to-buy.component";
import { SalesComponent } from "./views/pages/sales/sales.component";
import { PricesComponent } from "./views/pages/prices/prices.component";
import { HelpComponent } from "./views/pages/help/help.component";
import { BonucesComponent } from "./views/pages/bonuces/bonuces.component";
import { BlogComponent } from "./views/pages/blog/blog.component";
import { ShopsComponent } from "./views/pages/shops/shops.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "how-to-buy", component: HowToBuyComponent },
  { path: "sales", component: SalesComponent },
  { path: "prices", component: PricesComponent },
  { path: "help", component: HelpComponent },
  { path: "bonuces", component: BonucesComponent },
  { path: "blog", component: BlogComponent },
  { path: "shops", component: ShopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
