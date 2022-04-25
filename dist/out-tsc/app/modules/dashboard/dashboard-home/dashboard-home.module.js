import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardHomeComponents } from './components';
import { LayoutPageModule } from "../../core/layout/layout-page/layout-page.module";
import { LayoutFooterModule } from "../../core/layout/layout-footer/layout-footer.module";
import { RouterModule } from "@angular/router";
let DashboardHomeModule = class DashboardHomeModule {
};
DashboardHomeModule = __decorate([
    NgModule({
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
], DashboardHomeModule);
export { DashboardHomeModule };
//# sourceMappingURL=dashboard-home.module.js.map