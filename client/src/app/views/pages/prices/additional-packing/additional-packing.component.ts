import { Component } from "@angular/core";
import { WarehouseServiceIntrface } from "./../../../../interfaces/index";
import { Additional } from "src/app/db/warehouseServices";

@Component({
  selector: "app-additional-packing",
  templateUrl: "./additional-packing.component.html",
  styleUrls: ["./additional-packing.component.scss"],
})
export class AdditionalPackingComponent {
  additional: WarehouseServiceIntrface[] = Additional;
}
