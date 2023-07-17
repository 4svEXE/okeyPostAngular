import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bonusesComponent } from './bonuses.component';

describe('bonusesComponent', () => {
  let component: bonusesComponent;
  let fixture: ComponentFixture<bonusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ bonusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(bonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
