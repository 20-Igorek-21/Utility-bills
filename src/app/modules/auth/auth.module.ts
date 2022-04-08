import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginModule } from './auth-login/auth-login.module';
import { AuthRegisterModule } from './auth-register/auth-register.module';
import { AuthSharedModule } from './auth-shared/auth-shared.module';
import { AuthResetPasswordModule } from './auth-reset-password/auth-reset-password.module';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth-routing.module';

@NgModule({
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
export class AuthModule { }
