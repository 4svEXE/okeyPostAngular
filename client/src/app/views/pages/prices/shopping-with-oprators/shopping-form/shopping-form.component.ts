import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.scss']
})
export class ShoppingFormComponent {
  constructor(private popupService: PopupService){}

  openPopup() {
    this.popupService.openPopup('register');
  }
  
}
