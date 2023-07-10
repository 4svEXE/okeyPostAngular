import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSwiperComponent } from './categories-swiper.component';

describe('CategoriesSwiperComponent', () => {
  let component: CategoriesSwiperComponent;
  let fixture: ComponentFixture<CategoriesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
