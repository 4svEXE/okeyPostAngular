import { Component } from "@angular/core";
import { Categories } from "../../../../../db/categories";

@Component({
  selector: "app-categories-swiper",
  templateUrl: "./categories-swiper.component.html",
  styleUrls: ["./categories-swiper.component.scss"],
})
export class CategoriesSwiperComponent {
  screenWidth = window.innerWidth;

  imagesPath: string = "assets/home/HowProfitable/swiper/categories/";
  categories: any[] = Categories;
  activeCategory: string = "clothes";

  // Carousel configs
  cellsToShow: number = 5;

  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.responciveCarousel();
  }

  responciveCarousel() {
    if (this.screenWidth >= 1020) {
      this.cellsToShow = 5;
    } else if (this.screenWidth >= 940) {
      this.cellsToShow = 4;
    } else if (this.screenWidth >= 810) {
      this.cellsToShow = 3;
    } else if (this.screenWidth >= 640) {
      this.cellsToShow = 2;
    }
  }

  ngOnInit(): void {
    this.responciveCarousel();
  }
}
