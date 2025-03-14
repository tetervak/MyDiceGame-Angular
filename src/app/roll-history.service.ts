import { Injectable } from '@angular/core';
import {RollData} from './roll-data';

@Injectable({
  providedIn: 'root'
})
export class RollHistoryService {

  private rollHistoryData: RollData[] = [];

  addRollData(rollData: RollData): void {
    this.rollHistoryData.push(rollData)
  }

  getRollHistoryData(): RollData[] {
    return this.rollHistoryData;
  }

  constructor() { }

  clear() {
    this.rollHistoryData = [];
  }
}
