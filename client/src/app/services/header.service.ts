import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private isActiveHeaderSubject = new Subject<boolean>();
  isActiveHeader$ = this.isActiveHeaderSubject.asObservable();

  sendState(state: boolean) {
    this.isActiveHeaderSubject.next(state);
  }
}
