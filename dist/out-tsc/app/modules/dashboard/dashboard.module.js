import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard-routing.module';
import { DashboardHomeModule } from './dashboard-home/dashboard-home.module';
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            DashboardHomeModule,
            RouterModule.forChild(dashboardRoutes)
        ]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map