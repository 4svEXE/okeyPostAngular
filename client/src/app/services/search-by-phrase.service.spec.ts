import { TestBed } from '@angular/core/testing';

import { SearchByPhraseService } from './search-by-phrase.service';

describe('SearchByPhraseService', () => {
  let service: SearchByPhraseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByPhraseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
