import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { PopupComponent } from './views/shared/popup/popup.component';
import { LoginPopupComponent } from './views/shared/popup/login-popup/login-popup.component';
import { RegisterPopupComponent } from './views/shared/popup/register-popup/register-popup.component';
import { SmsCodePopupComponent } from './views/shared/popup/sms-code-popup/sms-code-popup.component';
import { PasswordRecoveryPopupComponent } from './views/shared/popup/password-recovery-popup/password-recovery-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupComponent,
    LoginPopupComponent,
    RegisterPopupComponent,
    SmsCodePopupComponent,
    PasswordRecoveryPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
