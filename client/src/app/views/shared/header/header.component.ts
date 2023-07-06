import { Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  isActivePopup: boolean = false;
  currentPopup: string = "login";
  isActiveHeader: boolean = false;

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
