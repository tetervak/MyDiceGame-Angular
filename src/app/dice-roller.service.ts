import { Injectable } from '@angular/core';
import {RollData} from './roll-data';

@Injectable({
  providedIn: 'root'
})
export class DiceRollerService {

  private getRandomDiceValue(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  getRollData(numberOfDice: number): RollData {

    const diceValues: number[] = [];
    let rollTotal: number = 0;

    for (let i: number = 0; i < numberOfDice; i++) {
      const diceValue: number = this.getRandomDiceValue();
      diceValues.push(diceValue);
      rollTotal += diceValue;
    }

    return {
      numberOfDice: numberOfDice,
      values: diceValues,
      total: rollTotal
    }
  }
}
