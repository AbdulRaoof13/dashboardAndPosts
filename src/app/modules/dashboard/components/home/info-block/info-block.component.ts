import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrl: './info-block.component.scss'
})
export class InfoBlockComponent {
  @Input() data:any;
}
