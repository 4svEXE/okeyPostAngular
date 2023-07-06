import { Component } from '@angular/core';
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: 'app-register-popup',
  templateUrl: './register-popup.component.html',
  styleUrls: ['./register-popup.component.scss']
})
export class RegisterPopupComponent {
  currentPopup: string = "register";

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
