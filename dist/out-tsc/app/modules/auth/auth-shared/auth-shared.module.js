import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authValidators, ConfirmPasswordValidatorDirective } from './validators';
import { authSharedServices } from './services';
let AuthSharedModule = class AuthSharedModule {
};
AuthSharedModule = __decorate([
    NgModule({
        declarations: [
            ...authValidators,
        ],
        imports: [
            CommonModule,
        ],
        exports: [
            ConfirmPasswordValidatorDirective,
        ],
        providers: [
            ...authSharedServices
        ]
    })
], AuthSharedModule);
export { AuthSharedModule };
//# sourceMappingURL=auth-shared.module.js.map