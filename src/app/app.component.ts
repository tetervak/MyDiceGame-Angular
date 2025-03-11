import { Component } from '@angular/core';
import {MyFooterComponent} from './my-footer/my-footer.component';
import {RollData} from './roll-data';
import {FormsModule} from '@angular/forms';
import {DiceDisplayComponent} from './dice-display/dice-display.component';
import {DiceRollerService} from './dice-roller.service';

@Component({
  selector: 'app-root',
  imports: [
    MyFooterComponent,
    FormsModule,
    DiceDisplayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Dice Game';
  rollData: RollData | undefined;
  numberOfDice: number = 4;

  //private service: DiceRollerService;
  constructor(private service: DiceRollerService) {
    //this.service = service;
  }

  onRollDice(): void {
    this.rollData = this.service.getRollData(this.numberOfDice);
  }
}
