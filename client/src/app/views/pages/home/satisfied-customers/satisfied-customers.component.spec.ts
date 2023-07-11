import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfiedCustomersComponent } from './satisfied-customers.component';

describe('SatisfiedCustomersComponent', () => {
  let component: SatisfiedCustomersComponent;
  let fixture: ComponentFixture<SatisfiedCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisfiedCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatisfiedCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
