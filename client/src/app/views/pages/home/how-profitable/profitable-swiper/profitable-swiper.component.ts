import { Component } from "@angular/core";
import { Products } from "../../../../../db/products"
import { Categories } from "../../../../../db/categories"
@Component({
  selector: "app-profitable-swiper",
  templateUrl: "./profitable-swiper.component.html",
  styleUrls: ["./profitable-swiper.component.scss"],
})
export class ProfitableSwiperComponent {
  screenWidth = window.innerWidth;
  swiperHeight: number = 1000;

  currentCategoty: string = "clothes";
  currentSlide: number = 0;

  products: any[] = Products;
  categories: any[] = Categories;

  // The products filtered by category
  filteredProducts = this.products.filter(
    (p: any) => p.category === this.currentCategoty
  );

  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.responciveSwiper();
  }

  // Change the height of the swiper
  responciveSwiper(): void {
    if (this.screenWidth > 1020) {
      this.swiperHeight = 350;
    } else {
      this.swiperHeight = 1000;
    }
  }

  ngOnInit() {
    this.responciveSwiper();
  }

  // To slide the products images near the control arrows
  slide(num: string){
    if(num === '+'){
      if(this.currentSlide + 1 < this.filteredProducts.length){
        this.currentSlide++
      }
    }
    if(num === '-'){
      if(this.currentSlide - 1 >= 0){
        this.currentSlide--
      }
    }
  }
}
