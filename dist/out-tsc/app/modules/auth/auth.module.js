import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginModule } from './auth-login/auth-login.module';
import { AuthRegisterModule } from './auth-register/auth-register.module';
import { AuthSharedModule } from './auth-shared/auth-shared.module';
import { AuthResetPasswordModule } from './auth-reset-password/auth-reset-password.module';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routing.module';
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            AuthLoginModule,
            AuthRegisterModule,
            AuthResetPasswordModule,
            AuthSharedModule,
            RouterModule.forChild(authRoutes)
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map