import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCodePopupComponent } from './sms-code-popup.component';

describe('SmsCodePopupComponent', () => {
  let component: SmsCodePopupComponent;
  let fixture: ComponentFixture<SmsCodePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsCodePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsCodePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
