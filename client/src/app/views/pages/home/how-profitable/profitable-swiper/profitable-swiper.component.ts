import { Component } from "@angular/core";

@Component({
  selector: "app-profitable-swiper",
  templateUrl: "./profitable-swiper.component.html",
  styleUrls: ["./profitable-swiper.component.scss"],
})
export class ProfitableSwiperComponent {
  screenWidth = window.innerWidth
  swiperHeight: number = 600;
}
