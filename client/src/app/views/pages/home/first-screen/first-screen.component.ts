import { Component } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";
import { PopupService } from "src/app/services/popup.service";

HeaderService;
@Component({
  selector: "app-first-screen",
  templateUrl: "./first-screen.component.html",
  styleUrls: ["./first-screen.component.scss"],
})
export class FirstScreenComponent {
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
