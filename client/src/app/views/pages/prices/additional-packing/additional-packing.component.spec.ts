import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalPackingComponent } from './additional-packing.component';

describe('AdditionalPackingComponent', () => {
  let component: AdditionalPackingComponent;
  let fixture: ComponentFixture<AdditionalPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalPackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
