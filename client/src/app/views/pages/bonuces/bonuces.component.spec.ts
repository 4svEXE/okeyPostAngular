import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonucesComponent } from './bonuces.component';

describe('BonucesComponent', () => {
  let component: BonucesComponent;
  let fixture: ComponentFixture<BonucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonucesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
