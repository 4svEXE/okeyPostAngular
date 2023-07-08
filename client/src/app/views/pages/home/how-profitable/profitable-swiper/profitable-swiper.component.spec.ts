import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitableSwiperComponent } from './profitable-swiper.component';

describe('ProfitableSwiperComponent', () => {
  let component: ProfitableSwiperComponent;
  let fixture: ComponentFixture<ProfitableSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitableSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitableSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
