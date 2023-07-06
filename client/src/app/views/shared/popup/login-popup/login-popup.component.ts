import { Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-login-popup",
  templateUrl: "./login-popup.component.html",
  styleUrls: ["./login-popup.component.scss"],
})
export class LoginPopupComponent {
  isActivePopup: boolean = false;
  currentPopup: string = "login";

  constructor(private popupService: PopupService) {
    this.popupService.data$.subscribe((data: any) => {
      this.isActivePopup = data.isActivePopup;
      this.currentPopup = data.currentPopup;
    });
  }

  setCurrentPopup(currentPopup: string) {
    this.popupService.sendData({
      isActivePopup: true,
      currentPopup: currentPopup,
    });
  }
}
