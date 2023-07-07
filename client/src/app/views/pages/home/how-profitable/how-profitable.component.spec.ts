import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowProfitableComponent } from './how-profitable.component';

describe('HowProfitableComponent', () => {
  let component: HowProfitableComponent;
  let fixture: ComponentFixture<HowProfitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowProfitableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowProfitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
