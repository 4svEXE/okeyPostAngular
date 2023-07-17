import { Component } from "@angular/core";
import { SearchByPhraseService } from "src/app/services/search-by-phrase.service";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent {
  searchPhrase: string = "";

  constructor(private searchByPhraseService: SearchByPhraseService) {}

  setSearchPhrase(phrase: string) {
    this.searchPhrase = phrase;
  }

  findBySearchPhrase() {
    // console.log(this.searchPhrase);
    this.searchByPhraseService.sendPhrase(this.searchPhrase);
  }
}
