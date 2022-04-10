import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { layoutPageComponents } from './components';
import { MatToolbarModule } from "@angular/material/toolbar";
let LayoutPageModule = class LayoutPageModule {
};
LayoutPageModule = __decorate([
    NgModule({
        declarations: [
            ...layoutPageComponents,
        ],
        exports: [
            ...layoutPageComponents,
        ],
        imports: [
            CommonModule,
            MatToolbarModule,
        ]
    })
], LayoutPageModule);
export { LayoutPageModule };
//# sourceMappingURL=layout-page.module.js.map