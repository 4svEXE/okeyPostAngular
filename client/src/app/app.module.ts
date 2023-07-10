import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { PopupComponent } from './views/shared/popup/popup.component';
import { LoginPopupComponent } from './views/shared/popup/login-popup/login-popup.component';
import { RegisterPopupComponent } from './views/shared/popup/register-popup/register-popup.component';
import { SmsCodePopupComponent } from './views/shared/popup/sms-code-popup/sms-code-popup.component';
import { PasswordRecoveryPopupComponent } from './views/shared/popup/password-recovery-popup/password-recovery-popup.component';
import { HomeComponent } from './views/pages/home/home.component';
import { FirstScreenComponent } from './views/pages/home/first-screen/first-screen.component';
import { HowProfitableComponent } from './views/pages/home/how-profitable/how-profitable.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { ProfitableSwiperComponent } from './views/pages/home/how-profitable/profitable-swiper/profitable-swiper.component';
import { CategoriesSwiperComponent } from './views/pages/home/how-profitable/categories-swiper/categories-swiper.component';

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
    HowProfitableComponent,
    FooterComponent,
    ProfitableSwiperComponent,
    CategoriesSwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
