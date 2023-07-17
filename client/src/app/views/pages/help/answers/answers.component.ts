import { Component } from '@angular/core';
import { SearchByPhraseService } from 'src/app/services/search-by-phrase.service';


@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {
  searchPhrase: string = '';

  constructor(private searchByPhraseService: SearchByPhraseService){
    this.searchByPhraseService.searchPhrase$.subscribe((phrase: string) => {
      this.searchPhrase = phrase;
    });
  }

}
