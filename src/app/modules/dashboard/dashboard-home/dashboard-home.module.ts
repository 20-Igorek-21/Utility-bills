import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardHomeComponents } from './components';
import { LayoutPageModule } from '../../core/layout/layout-page/layout-page.module';
import { LayoutFooterModule } from '../../core/layout/layout-footer/layout-footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ...dashboardHomeComponents,
    ],
    imports: [
        CommonModule,
        LayoutPageModule,
        LayoutFooterModule,
        RouterModule
    ]
})
export class DashboardHomeModule { }
