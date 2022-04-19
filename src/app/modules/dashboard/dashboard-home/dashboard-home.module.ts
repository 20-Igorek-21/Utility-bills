import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {dashboardHomeComponents} from './components';
import {LayoutPageModule} from "../../core/layout/layout-page/layout-page.module";
import {LayoutFooterModule} from "../../core/layout/layout-footer/layout-footer.module";

@NgModule({
    declarations: [
        ...dashboardHomeComponents,
    ],
    imports: [
        CommonModule,
        LayoutPageModule,
        LayoutFooterModule
    ]
})
export class DashboardHomeModule { }
