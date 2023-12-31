import { Component } from "@angular/core";
import { SalesPostInterface } from "../../../interfaces";
import { SalesPosts } from "src/app/db/salesPosts";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"],
})
export class SalesComponent {
  imgPath: string = "assets/img/sales/";

  // Current page in pagination
  page: number = 1;
  
  pageChangeHandler(event: any){
    this.page = event;
    window.scrollTo(0, 0);
  }

  salesPosts: SalesPostInterface[] = SalesPosts;
}
