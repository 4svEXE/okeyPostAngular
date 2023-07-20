import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingWithOpratorsComponent } from './shopping-with-oprators.component';

describe('ShoppingWithOpratorsComponent', () => {
  let component: ShoppingWithOpratorsComponent;
  let fixture: ComponentFixture<ShoppingWithOpratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingWithOpratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingWithOpratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
