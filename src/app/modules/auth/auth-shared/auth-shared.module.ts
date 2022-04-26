import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authValidators, ConfirmPasswordValidatorDirective } from './validators';
import { authSharedServices } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interseptors/auth.interceptor';


@NgModule({
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
export class AuthSharedModule { }
