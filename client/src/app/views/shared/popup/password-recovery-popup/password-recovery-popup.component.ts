import { Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-password-recovery-popup",
  templateUrl: "./password-recovery-popup.component.html",
  styleUrls: ["./password-recovery-popup.component.scss"],
})
export class PasswordRecoveryPopupComponent {
  currentPopup: string = "password-recovery";

  constructor(private popupService: PopupService) {
    this.popupService.data$.subscribe((data: any) => {
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
