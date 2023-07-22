import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { IvyCarouselModule } from "angular-responsive-carousel";
import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./views/shared/header/header.component";
import { PopupComponent } from "./views/shared/popup/popup.component";
import { LoginPopupComponent } from "./views/shared/popup/login-popup/login-popup.component";
import { RegisterPopupComponent } from "./views/shared/popup/register-popup/register-popup.component";
import { SmsCodePopupComponent } from "./views/shared/popup/sms-code-popup/sms-code-popup.component";
import { PasswordRecoveryPopupComponent } from "./views/shared/popup/password-recovery-popup/password-recovery-popup.component";
import { HomeComponent } from "./views/pages/home/home.component";
import { FirstScreenComponent } from "./views/pages/home/first-screen/first-screen.component";
import { FirstScreenPricesComponent } from "./views/pages/prices/first-screen/first-screen.component";
import { HowProfitableComponent } from "./views/pages/home/how-profitable/how-profitable.component";
import { FooterComponent } from "./views/shared/footer/footer.component";
import { ProfitableSwiperComponent } from "./views/pages/home/how-profitable/profitable-swiper/profitable-swiper.component";
import { CategoriesSwiperComponent } from "./views/pages/home/how-profitable/categories-swiper/categories-swiper.component";
import { OurShoppersComponent } from "./views/pages/home/our-shoppers/our-shoppers.component";
import { SimpleStepsComponent } from "./views/pages/home/simple-steps/simple-steps.component";
import { VirtualTourComponent } from "./views/pages/home/virtual-tour/virtual-tour.component";
import { SatisfiedCustomersComponent } from "./views/pages/home/satisfied-customers/satisfied-customers.component";
import { BloggersReviewsComponent } from "./views/pages/home/bloggers-reviews/bloggers-reviews.component";
import { YourPersonalAdressComponent } from "./views/pages/home/your-personal-adress/your-personal-adress.component";
import { SunscribeToUsComponent } from "./views/pages/home/sunscribe-to-us/sunscribe-to-us.component";
import { SalesComponent } from "./views/pages/sales/sales.component";
import { PricesComponent } from "./views/pages/prices/prices.component";
import { HelpComponent } from "./views/pages/help/help.component";
import { bonusesComponent } from "./views/pages/bonuses/bonuses.component";
import { BlogComponent } from "./views/pages/blog/blog.component";
import { ShopsComponent } from "./views/pages/shops/shops.component";
import { HowToBuyComponent } from "./views/pages/how-to-buy/how-to-buy.component";
import { PageTitleComponent } from "./views/shared/page-title/page-title.component";
import { SocialBoxComponent } from "./views/shared/social-box/social-box.component";
import { UpButtonComponent } from "./views/shared/up-button/up-button.component";
import { MakeMoneyComponent } from "./views/pages/bonuses/make-money/make-money.component";
import { SearchFormComponent } from "./views/pages/help/search-form/search-form.component";
import { AnswersComponent } from "./views/pages/help/answers/answers.component";
import { DeliveryCalculatorComponent } from "./views/shared/delivery-calculator/delivery-calculator.component";
import { DeliveryOptionsComponent } from './views/pages/prices/delivery-options/delivery-options.component';
import { WarehouseServicesComponent } from './views/pages/prices/warehouse-services/warehouse-services.component';
import { ShoppingWithOpratorsComponent } from './views/pages/prices/shopping-with-oprators/shopping-with-oprators.component';
import { ShoppingFormComponent } from './views/pages/prices/shopping-with-oprators/shopping-form/shopping-form.component';
import { AdditionalPackingComponent } from './views/pages/prices/additional-packing/additional-packing.component';
import { PricesInsoranceComponent } from './views/pages/prices/prices-insorance/prices-insorance.component';
import { AboutMeComponent } from './views/shared/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupComponent,
    LoginPopupComponent,
    RegisterPopupComponent,
    SmsCodePopupComponent,
    PasswordRecoveryPopupComponent,
    HomeComponent,
    FirstScreenComponent,
    FirstScreenPricesComponent,
    HowProfitableComponent,
    FooterComponent,
    ProfitableSwiperComponent,
    CategoriesSwiperComponent,
    OurShoppersComponent,
    SimpleStepsComponent,
    VirtualTourComponent,
    SatisfiedCustomersComponent,
    BloggersReviewsComponent,
    YourPersonalAdressComponent,
    SunscribeToUsComponent,
    SalesComponent,
    PricesComponent,
    HelpComponent,
    bonusesComponent,
    BlogComponent,
    ShopsComponent,
    HowToBuyComponent,
    PageTitleComponent,
    SocialBoxComponent,
    UpButtonComponent,
    MakeMoneyComponent,
    SearchFormComponent,
    AnswersComponent,
    DeliveryCalculatorComponent,
    DeliveryOptionsComponent,
    WarehouseServicesComponent,
    ShoppingWithOpratorsComponent,
    ShoppingFormComponent,
    AdditionalPackingComponent,
    PricesInsoranceComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
