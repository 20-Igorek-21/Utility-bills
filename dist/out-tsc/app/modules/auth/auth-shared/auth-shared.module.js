import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authValidators, ConfirmPasswordValidatorDirective } from './validators';
import { authSharedServices } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interseptors/auth.interceptor';
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
            ...authSharedServices,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
            }
        ]
    })
], AuthSharedModule);
export { AuthSharedModule };
//# sourceMappingURL=auth-shared.module.js.map