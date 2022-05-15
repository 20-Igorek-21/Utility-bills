import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard-routing.module';
import { DashboardHomeModule } from './dashboard-home/dashboard-home.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DashboardHomeModule,
        RouterModule.forChild(dashboardRoutes)
    ]
})
export class DashboardModule { }
