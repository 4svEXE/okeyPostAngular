import { Component } from "@angular/core";
import { Categories } from "../../../../../db/categories";
import { CategoriesSwiperService } from "src/app/services/categories-swiper.service";


@Component({
  selector: "app-categories-swiper",
  templateUrl: "./categories-swiper.component.html",
  styleUrls: ["./categories-swiper.component.scss"],
})
export class CategoriesSwiperComponent {
  screenWidth = window.innerWidth;

  imagesPath: string = "assets/img/home/HowProfitable/swiper/categories/";
  categories: any[] = Categories;
  activeCategory: string = "clothes";

  // Carousel configs
  cellsToShow: number = 2;
  swiperHeight: number = 120;

  constructor(private categoriesSwiperService: CategoriesSwiperService) {}

  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.responciveCarousel();
  }

  responciveCarousel(): number {
    if (this.screenWidth >= 1020) {
      this.swiperHeight = 120;
      return this.cellsToShow = 5;
    } else if (this.screenWidth >= 940) {
      this.swiperHeight = 200;
      return this.cellsToShow = 3;
    } else if (this.screenWidth >= 810) {
      this.swiperHeight = 200;
      return this.cellsToShow = 2;
    } else if (this.screenWidth >= 640) {
      this.swiperHeight = 200;
      return this.cellsToShow = 1;
    }
    return 0;
  }

  ngOnInit(): void {
    this.responciveCarousel();
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.categoriesSwiperService.sendCurrentCategory(category);
  }
}
