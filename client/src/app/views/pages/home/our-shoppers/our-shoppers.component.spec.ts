import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurShoppersComponent } from './our-shoppers.component';

describe('OurShoppersComponent', () => {
  let component: OurShoppersComponent;
  let fixture: ComponentFixture<OurShoppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurShoppersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurShoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
