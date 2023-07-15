import { Component } from '@angular/core';
import { BonuseInterface } from 'src/app/interfaces';
import { Bonuses } from 'src/app/db/bonuses';

@Component({
  selector: 'app-bonuces',
  templateUrl: './bonuces.component.html',
  styleUrls: ['./bonuces.component.scss']
})
export class BonucesComponent {
  imgPath: string = "assets/img/bonuses/";
  bonuses: BonuseInterface[] = Bonuses;
}

