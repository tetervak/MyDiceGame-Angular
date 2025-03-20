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
  historyTotal: number = 0;


  constructor(private service: RollHistoryService) {
    this.rollHistoryData = service.getRollHistoryData();
    this.historyTotal = service.getHistoryTotal();
  }

  onClearHistory(): void {
    this.rollHistoryData = [];
    this.historyTotal = 0;
    this.service.clear();
  }

}
