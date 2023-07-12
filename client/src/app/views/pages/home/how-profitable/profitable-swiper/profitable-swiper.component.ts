import { Component } from "@angular/core";
import { Products } from "../../../../../db/products";
import { Categories } from "../../../../../db/categories";
import { CategoriesSwiperService } from "src/app/services/categories-swiper.service";

@Component({
  selector: "app-profitable-swiper",
  templateUrl: "./profitable-swiper.component.html",
  styleUrls: ["./profitable-swiper.component.scss"],
})
export class ProfitableSwiperComponent {
  screenWidth = window.innerWidth;
  swiperHeight: number = 1000;

  currentCategoty: string = "clothes";
  translatedCategory: string = "одягу";
  currentSlide: number = 0;
  hideImagesPrevNext: boolean = false;

  products: any[] = Products;
  categories: any[] = Categories;
  imgPath: string = 'assets/img/home/HowProfitable/swiper/products/'

  // The products filtered by category
  filteredProducts = this.products.filter(
    (p: any) => p.category === this.currentCategoty
  );

  constructor(private categoriesSwiperService: CategoriesSwiperService) {
    categoriesSwiperService.currentCategory$.subscribe((category) => {
      this.currentCategoty = category;

      this.filteredProducts = this.products.filter(
        (p: any) => p.category === category
      );

      // Get translaton for the category
      this.categories.map((category) => {
        if (this.currentCategoty === category.title) {
          return (this.translatedCategory = category.translation);
        }
      });
    });
  }

  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.responciveSwiper();
  }

  // Change the height of the swiper
  responciveSwiper(): void {
    if (this.screenWidth > 1020) {
      this.swiperHeight = 350;
      this.hideImagesPrevNext = false;
    } else {
      this.swiperHeight = 1000;
      this.hideImagesPrevNext = true;
    }
  }

  ngOnInit() {
    this.responciveSwiper();
  }

  // To slide the products images near the control arrows
  slide(num: string) {
    if (num === "+") {
      if (this.currentSlide + 1 < this.filteredProducts.length) {
        this.currentSlide++;
      }
    }
    if (num === "-") {
      if (this.currentSlide - 1 >= 0) {
        this.currentSlide--;
      }
    }
  }
}
