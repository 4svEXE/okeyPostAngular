import { Input, Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
  styleUrls: ["./page-title.component.scss"],
})
export class PageTitleComponent {
  @Input() currentPage: string = "";
  @Input() title: string = "";
  @Input() describition: string = "";
  @Input() popupTarget: string = "register";
  @Input() popupButtonTitle: string = "";

  constructor(private popupService: PopupService) {}

  openPopup(popupType: string) {
    this.popupService.openPopup(popupType);
  }
}
