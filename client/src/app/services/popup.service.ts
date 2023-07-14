import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
// import { HeaderService } from "./header.service";

@Injectable({
  providedIn: "root",
})
export class PopupService {
  // constructor(
  //   private headerService: HeaderService,
  // ) {}

  private dataSubject = new Subject<object>();
  data$ = this.dataSubject.asObservable();

  sendData(data: object) {
    this.dataSubject.next(data);
  }

  openPopup(popupType: string){
    this.sendData({
      isActivePopup: true,
      currentPopup: popupType //"register"
    });

    // Open the header
    // this.headerService.sendState(true);
  }
}

type popupDataType = {
  isActivePopup: boolean;
  currentPopup: string;
  // "login", "register", "sms-code", "password-recovery"
}