import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPersonalAdressComponent } from './your-personal-adress.component';

describe('YourPersonalAdressComponent', () => {
  let component: YourPersonalAdressComponent;
  let fixture: ComponentFixture<YourPersonalAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPersonalAdressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPersonalAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
