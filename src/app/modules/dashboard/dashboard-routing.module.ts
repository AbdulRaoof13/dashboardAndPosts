import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetComponent } from './components/budget/budget.component';
import { TeamComponent } from './components/team/team.component';


const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'budget',
                component: BudgetComponent
            },
            {
                path: 'team',
                component: TeamComponent
            },
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }