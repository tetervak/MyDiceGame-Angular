import { Injectable } from '@angular/core';
import {RollData} from './roll-data';

@Injectable({
  providedIn: 'root'
})
export class RollHistoryService {

  private rollHistoryData: RollData[] = [];
  private historyTotal: number = 0;

  addRollData(rollData: RollData): void {
    this.rollHistoryData.push(rollData)
    this.historyTotal += rollData.total;
  }

  getHistoryTotal(): number {
    return this.historyTotal;
  }

  getRollHistoryData(): RollData[] {
    return this.rollHistoryData;
  }

  constructor() { }

  clear() {
    this.rollHistoryData = [];
    this.historyTotal = 0;
  }
}
