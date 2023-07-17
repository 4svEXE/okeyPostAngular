import { Component } from "@angular/core";
import { SearchByPhraseService } from "src/app/services/search-by-phrase.service";
import { FAQInterface } from "../../../../interfaces";
import { FAQ } from "src/app/db/FAQ";

@Component({
  selector: "app-answers",
  templateUrl: "./answers.component.html",
  styleUrls: ["./answers.component.scss"],
})
export class AnswersComponent {
  searchPhrase: string = "";
  faq: FAQInterface[] = FAQ;
  currentRubric: string = "";

  filteredFAQ: FAQInterface[] = [];

  constructor(private searchByPhraseService: SearchByPhraseService) {
    this.searchByPhraseService.searchPhrase$.subscribe((phrase: string) => {
      this.searchPhrase = phrase;

      // search
      this.search(this.searchPhrase);
    });
  }

  ngOnInit() {
    // search
    this.search(this.searchPhrase);
  }

  setCurrentRubric(rubric: string) {
    this.currentRubric = rubric;
  }

  search(phrase: string) {
    this.filteredFAQ = this.faq
      .filter((item) => item.text.toLowerCase().includes(phrase.toLowerCase()))
      .sort((a: FAQInterface, b: FAQInterface) => {
        if (a.rubric > b.rubric) {
          return 1;
        }
        if (a.rubric < b.rubric) {
          return -1;
        }
        return 0;
      });
  }
}
