import { Component, Input } from '@angular/core';
// import { IClan } from './../../cr'; Webpack is failing to parse this line properly

@Component({
  selector: 'cr-clan-card',
  templateUrl: './cr-card.component.html',
  styleUrls: ['./cr-card.component.scss']
})
export class CrCardComponent {
  @Input() clan: any;
}
