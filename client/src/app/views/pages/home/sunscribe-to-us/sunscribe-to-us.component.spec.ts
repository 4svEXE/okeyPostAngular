import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunscribeToUsComponent } from './sunscribe-to-us.component';

describe('SunscribeToUsComponent', () => {
  let component: SunscribeToUsComponent;
  let fixture: ComponentFixture<SunscribeToUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunscribeToUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunscribeToUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
