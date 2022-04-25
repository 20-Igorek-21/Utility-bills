import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { layoutPageComponents } from './components';
import { layoutPageDirectives } from './directives';
import { RouterModule } from '@angular/router';
let LayoutPageModule = class LayoutPageModule {
};
LayoutPageModule = __decorate([
    NgModule({
        declarations: [
            ...layoutPageComponents,
            ...layoutPageDirectives,
        ],
        exports: [
            ...layoutPageComponents,
            ...layoutPageDirectives,
        ],
        imports: [
            CommonModule,
            MatToolbarModule,
            RouterModule,
        ]
    })
], LayoutPageModule);
export { LayoutPageModule };
//# sourceMappingURL=layout-page.module.js.map