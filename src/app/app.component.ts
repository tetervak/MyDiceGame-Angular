import { Component } from '@angular/core';
import {MyFooterComponent} from './my-footer/my-footer.component';
import {DiceRollerComponent} from './dice-roller/dice-roller.component';

@Component({
  selector: 'app-root',
  imports: [
    MyFooterComponent,
    DiceRollerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Dice Game';
}
