import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userSharedServices } from './services';
import { userIndicatorsDirectives } from "./directives";
let UserSharedModule = class UserSharedModule {
};
UserSharedModule = __decorate([
    NgModule({
        declarations: [
            ...userIndicatorsDirectives
        ],
        exports: [
            ...userIndicatorsDirectives
        ],
        imports: [
            CommonModule
        ],
        providers: [
            ...userSharedServices
        ]
    })
], UserSharedModule);
export { UserSharedModule };
//# sourceMappingURL=user-shared.module.js.map