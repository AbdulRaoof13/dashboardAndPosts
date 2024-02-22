import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-summary',
  templateUrl: './info-summary.component.html',
  styleUrl: './info-summary.component.scss'
})
export class InfoSummaryComponent {
  @Input() data:any;
}
