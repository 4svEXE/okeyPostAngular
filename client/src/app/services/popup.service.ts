import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PopupService {
  private dataSubject = new Subject<object>();
  data$ = this.dataSubject.asObservable();

  sendData(data: object) {
    this.dataSubject.next(data);
  }

  openPopup(popupType: string) {
    this.sendData({
      isActivePopup: true,
      currentPopup: popupType, //"register"
    });
  }
}

type popupDataType = {
  isActivePopup: boolean;
  currentPopup: string;
  // "login", "register", "sms-code", "password-recovery"
};
