import { Component } from '@angular/core';
import {MyFooterComponent} from './my-footer/my-footer.component';

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
  diceValue: number | undefined;

  private getRandomDiceValue(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  onRollDice(): void {
    this.diceValue = this.getRandomDiceValue();
  }
}
