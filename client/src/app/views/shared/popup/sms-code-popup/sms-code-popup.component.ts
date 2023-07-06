import { Component } from '@angular/core';
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: 'app-sms-code-popup',
  templateUrl: './sms-code-popup.component.html',
  styleUrls: ['./sms-code-popup.component.scss']
})
export class SmsCodePopupComponent {
  currentPopup: string = "sms-code";

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
