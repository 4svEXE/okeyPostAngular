import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesInsoranceComponent } from './prices-insorance.component';

describe('PricesInsoranceComponent', () => {
  let component: PricesInsoranceComponent;
  let fixture: ComponentFixture<PricesInsoranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesInsoranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesInsoranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
