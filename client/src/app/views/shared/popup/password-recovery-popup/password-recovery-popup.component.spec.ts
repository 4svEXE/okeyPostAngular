import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryPopupComponent } from './password-recovery-popup.component';

describe('PasswordRecoveryPopupComponent', () => {
  let component: PasswordRecoveryPopupComponent;
  let fixture: ComponentFixture<PasswordRecoveryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordRecoveryPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordRecoveryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
