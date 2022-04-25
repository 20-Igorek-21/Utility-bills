import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { layoutFooterComponents, LayoutFooterViewComponent } from './components';
let LayoutFooterModule = class LayoutFooterModule {
};
LayoutFooterModule = __decorate([
    NgModule({
        declarations: [
            ...layoutFooterComponents
        ],
        exports: [
            LayoutFooterViewComponent
        ],
        imports: [
            CommonModule
        ]
    })
], LayoutFooterModule);
export { LayoutFooterModule };
//# sourceMappingURL=layout-footer.module.js.map