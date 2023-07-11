import { Component } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-our-shoppers",
  templateUrl: "./our-shoppers.component.html",
  styleUrls: ["./our-shoppers.component.scss"],
})
export class OurShoppersComponent {
  constructor(
    private headerService: HeaderService,
    private popupService: PopupService
  ) {}

  openLoginPopup() {
    this.popupService.sendData({
      isActivePopup: true,
      currentPopup: "register",
    });

    // Opet the header
    this.headerService.sendState(true);
  }
}
