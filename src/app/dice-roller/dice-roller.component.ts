import { Component } from '@angular/core';
import {RollData} from '../roll-data';
import {DiceRollerService} from '../dice-roller.service';
import {DiceDisplayComponent} from '../dice-display/dice-display.component';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {RollHistoryService} from '../roll-history.service';

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

  constructor(
    private diceRollerService: DiceRollerService,
    private rollHistoryService: RollHistoryService) {
  }

  onRollDice(): void {
    this.rollData = this.diceRollerService.getRollData(this.numberOfDice);
    this.rollHistoryService.addRollData(this.rollData);
  }
}
