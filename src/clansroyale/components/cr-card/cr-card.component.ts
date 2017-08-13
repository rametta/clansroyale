import { Component, Input } from '@angular/core';
// import { IClan } from './../../cr';

@Component({
  selector: 'cr-clan-card',
  templateUrl: './cr-card.component.html',
  styleUrls: ['./cr-card.component.scss']
})
export class CrCardComponent {
  @Input() clan: any;
}
