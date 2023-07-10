import { Component } from "@angular/core";

@Component({
  selector: "app-profitable-swiper",
  templateUrl: "./profitable-swiper.component.html",
  styleUrls: ["./profitable-swiper.component.scss"],
})
export class ProfitableSwiperComponent {
  screenWidth = window.innerWidth;
  swiperHeight: number = 1000;

  currentCategoty: string = "clothes";
  products: any[] = [
    {
      name: "Columbia Barlow Pass 550 Turbodown Jacket",
      image: "assets/home/HowProfitable/swiper/products/ColumbiaBarlow.png",
      priceUk: 80.62,
      priceUa: 6399,
      economy: 200,
      delivery: 10,
      category: "clothes",
    },
    {
      name: "Columbia Barlow Pass 550 Turbodown Jacket",
      image: "assets/home/HowProfitable/swiper/products/ColumbiaBarlow.png",
      priceUk: 8220,
      priceUa: 6399,
      economy: 200,
      delivery: 10,
      category: "clothes",
    },
    {
      name: "Columbia Barlow Pass 550 Turbodown Jacket",
      image: "assets/home/HowProfitable/swiper/products/ColumbiaBarlow.png",
      priceUk: 80,
      priceUa: 6399,
      economy: 200,
      delivery: 10,
      category: "clothes",
    },
    {
      name: "Columbia Barlow Pass 550 Turbodown Jacket",
      image: "assets/home/HowProfitable/swiper/products/ColumbiaBarlow.png",
      priceUk: 80,
      priceUa: 6399,
      economy: 200,
      delivery: 10,
      category: "clothes",
    },
  ];

  filteredProducts = this.products.filter(
    (p: any) => p.category === this.currentCategoty
  );

  currentSlide: number = 1;

  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.responciveSwiper();
  }

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
}
