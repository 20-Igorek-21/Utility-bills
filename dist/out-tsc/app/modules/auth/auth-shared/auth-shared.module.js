import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authValidators, ConfirmPasswordValidatorDirective } from './validators';
let AuthSharedModule = class AuthSharedModule {
};
AuthSharedModule = __decorate([
    NgModule({
        declarations: [
            ...authValidators,
        ],
        exports: [
            ConfirmPasswordValidatorDirective
        ],
        imports: [
            CommonModule
        ]
    })
], AuthSharedModule);
export { AuthSharedModule };
//# sourceMappingURL=auth-shared.module.js.map