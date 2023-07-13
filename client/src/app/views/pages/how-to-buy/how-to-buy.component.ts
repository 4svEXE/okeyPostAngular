import { Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";
import { BuyStepsInterface } from "../../../interfaces";
import { BuySteps } from "../../../db/buySteps";

@Component({
  selector: "app-how-to-buy",
  templateUrl: "./how-to-buy.component.html",
  styleUrls: ["./how-to-buy.component.scss"],
})
export class HowToBuyComponent {
  buySteps: BuyStepsInterface[] = BuySteps;
  imgPath: string = "assets/img/howToBuy/";

  constructor(private popupService: PopupService) {}

  openPopup(popupType: string) {
    this.popupService.openPopup(popupType);
  }
}
