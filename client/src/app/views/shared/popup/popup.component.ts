import { Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent {
  isActivePopup: boolean = false;
  currentPopup: string = "login";
  // "login", "register", "sms-code", "password-recovery"

  constructor(private popupService: PopupService) {
    this.popupService.data$.subscribe((data: any) => {
      this.isActivePopup = data.isActivePopup;
      this.currentPopup = data.currentPopup;
    });
  }

  togglePopup() {
    this.popupService.sendData({
      isActivePopup: !this.isActivePopup,
      currentPopup: this.currentPopup,
    });
  }
}
