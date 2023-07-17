import { Component } from '@angular/core';
import { BonuseInterface } from 'src/app/interfaces';
import { Bonuses } from 'src/app/db/bonuses';

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.scss']
})
export class bonusesComponent {
  imgPath: string = "assets/img/bonuses/";
  bonuses: BonuseInterface[] = Bonuses;
}

