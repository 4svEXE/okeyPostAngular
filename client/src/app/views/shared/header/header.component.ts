import { Component } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";
import { PopupService } from "src/app/services/popup.service";
import { LinkInterface } from "../../../interfaces";

import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  isActivePopup: boolean = false;
  currentPopup: string = "login";
  isActiveHeader: boolean = false;

  links: LinkInterface[] = [
    { title: "Як купувати", path: "/how-to-buy" },
    { title: "Розпродажі", path: "/sales" },
    { title: "Ціни", path: "/prices" },
    { title: "Допомога", path: "/help" },
    { title: "Бонуси", path: "/bonuces" },
    { title: "Блог", path: "/blog" },
    { title: "Магазини", path: "/shops" },
  ];

  constructor(
    private headerService: HeaderService,
    private popupService: PopupService,
    private router: Router
  ) {
    this.popupService.data$.subscribe((data: any) => {
      this.isActivePopup = data.isActivePopup;
      this.currentPopup = data.currentPopup;
    });

    this.headerService.isActiveHeader$.subscribe((state: any) => {
      this.isActiveHeader = state;
    });
  }

  togglePopup() {
    this.popupService.sendData({
      isActivePopup: !this.isActivePopup,
      currentPopup: this.currentPopup,
    });
  }

  ngOnInit() {
    // Skroll to top the page when navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
