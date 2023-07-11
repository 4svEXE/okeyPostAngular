import { TestBed } from '@angular/core/testing';

import { CategoriesSwiperService } from './categories-swiper.service';

describe('CategoriesSwiperService', () => {
  let service: CategoriesSwiperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesSwiperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
