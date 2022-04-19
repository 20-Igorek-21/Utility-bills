import { Routes } from '@angular/router';
import { DashboardHomePageViewComponent } from './dashboard-home/components';

export const dashboardRoutes: Routes = [
    {
        pathMatch: 'full',
        path: '',
        component: DashboardHomePageViewComponent
    }
]
