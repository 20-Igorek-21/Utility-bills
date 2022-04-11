import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
let AuthSharedModule = class AuthSharedModule {
};
AuthSharedModule = __decorate([
    NgModule({
        declarations: [
            ...authValidators
        ],
        imports: [
            CommonModule
        ]
    })
], AuthSharedModule);
export { AuthSharedModule };
//# sourceMappingURL=auth-shared.module.js.map