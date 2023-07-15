import { Component, Input } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-make-money",
  templateUrl: "./make-money.component.html",
  styleUrls: ["./make-money.component.scss"],
})
export class MakeMoneyComponent {
  @Input() imgPath: string = "";

  constructor(private popupService: PopupService) {}

  openPopup(popupType: string) {
    this.popupService.openPopup(popupType);
  }
}
