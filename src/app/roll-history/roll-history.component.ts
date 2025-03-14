import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {RollHistoryService} from '../roll-history.service';
import {RollData} from '../roll-data';

@Component({
  selector: 'app-roll-history',
  imports: [
    RouterLink
  ],
  templateUrl: './roll-history.component.html',
  styleUrl: './roll-history.component.css'
})
export class RollHistoryComponent {

  rollHistoryData: RollData[];

  constructor(private service: RollHistoryService) {
    this.rollHistoryData = service.getRollHistoryData();
  }

  onClearHistory(): void {
    this.rollHistoryData = [];
    this.service.clear();
  }

}
