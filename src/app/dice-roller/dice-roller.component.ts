import { Component } from '@angular/core';
import {RollData} from '../roll-data';
import {DiceRollerService} from '../dice-roller.service';
import {DiceDisplayComponent} from '../dice-display/dice-display.component';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dice-roller',
  imports: [
    DiceDisplayComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './dice-roller.component.html',
  styleUrl: './dice-roller.component.css'
})
export class DiceRollerComponent {
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
