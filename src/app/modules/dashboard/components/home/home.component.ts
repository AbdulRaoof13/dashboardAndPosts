import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  topInfoBlocks = [
    { heading: 'Summary', label1: 'Due Tasks', value1: 21, label2: 'Completed', value2: 13, accent: 'cool' },
    { heading: 'Overdue', label1: 'Tasks', value1: 17, label2: 'From yesterday', value2: 9, accent: 'negative' },
    { heading: 'Issues', label1: 'Open', value1: 24, label2: 'Closed today', value2: 19, accent: 'nuetral' },
    { heading: 'Features', label1: 'Proposals', value1: 38, label2: 'Implemented', value2: 16, accent: 'positive' }
  ]

  summaryInfoBlocks = [
    { label1: 'New Issues', value1: 214, label2: 'Fixed', value2: 3, label3: "Won't fix", value3: 4, accent:'violet' },
    { label1: 'Closed', value1: 75, label2: 'Re-opened', value2: 8, label3: 'Needs Triage', value3: 6, accent: 'positive' }
  ]

}
