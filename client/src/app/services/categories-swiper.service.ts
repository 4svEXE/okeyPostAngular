import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriesSwiperService {
  private currentCategorySubject = new Subject<string>();
  currentCategory$ = this.currentCategorySubject.asObservable();

  sendCurrentCategory(category: string) {
    this.currentCategorySubject.next(category);
  }
}
