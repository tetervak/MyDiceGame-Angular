import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-my-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './my-footer.component.html',
  styleUrl: './my-footer.component.css'
})
export class MyFooterComponent {
  @Input() name: string = 'Sheridan College';
  today: Date = new Date();
}
