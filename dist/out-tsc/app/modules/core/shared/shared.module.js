import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedServices } from './services';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
        ],
        exports: [],
        providers: [
            ...sharedServices
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map