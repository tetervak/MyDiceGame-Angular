import { Component } from '@angular/core';
import {MyFooterComponent} from './my-footer/my-footer.component';
import {RollData} from './roll-data';

@Component({
  selector: 'app-root',
  imports: [
    MyFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Dice Game';
  rollData: RollData | undefined;
  numberOfDice: number = 3;

  private getRandomDiceValue(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  private getRollData(numberOfDice: number): RollData {

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

  onRollDice(): void {
    this.rollData = this.getRollData(this.numberOfDice);
  }

  onNumberOfDiceChange(value: string): void {
    this.numberOfDice = parseInt(value);
  }
}
