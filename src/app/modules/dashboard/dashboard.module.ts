import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetComponent } from './components/budget/budget.component';
import { TeamComponent } from './components/team/team.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InfoBlockComponent } from './components/home/info-block/info-block.component';
import { InfoSummaryComponent } from './components/home/info-summary/info-summary.component';
import { InfoGraphComponent } from './components/home/info-graph/info-graph.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    BudgetComponent,
    TeamComponent,
    InfoBlockComponent,
    InfoSummaryComponent,
    InfoGraphComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
