import { Component } from "@angular/core";
import { WarehouseServices } from "src/app/db/warehouseServices";
import { WarehouseServiceIntrface } from './../../../../interfaces/index';

@Component({
  selector: "app-warehouse-services",
  templateUrl: "./warehouse-services.component.html",
  styleUrls: ["./warehouse-services.component.scss"],
})
export class WarehouseServicesComponent {
  warehouseServices: WarehouseServiceIntrface[] = WarehouseServices;
}