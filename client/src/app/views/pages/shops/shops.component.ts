import { Component } from '@angular/core';
import { BrandInterface } from './../../../interfaces/index';
import { Brands } from 'src/app/db/brands';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent {
  imgPath: string = "assets/img/shops/";
  page: number = 1;

  pageChangeHandler(event: any){
    this.page = event;
    window.scrollTo(0, 0);
  }

  brands: BrandInterface[] = Brands;
}
