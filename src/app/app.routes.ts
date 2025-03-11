import { Routes } from '@angular/router';
import {DiceRollerComponent} from './dice-roller/dice-roller.component';
import {RollHistoryComponent} from './roll-history/roll-history.component';

export const routes: Routes = [
  {path: "dice-roller", component: DiceRollerComponent},
  {path: "roll-history", component: RollHistoryComponent},
  {path: "", redirectTo: "dice-roller", pathMatch: "full"},
  {path: "**", redirectTo: "dice-roller"}
];
