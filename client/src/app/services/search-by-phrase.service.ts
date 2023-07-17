import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchByPhraseService {
  private searchPhraseSubject = new Subject<string>();
  searchPhrase$ = this.searchPhraseSubject.asObservable();

  sendPhrase(phrase: string) {
    this.searchPhraseSubject.next(phrase);
  }
}
