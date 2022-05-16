import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authValidators, ConfirmPasswordValidatorDirective } from './validators';
import { authSharedServices } from './services';

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
        ...authSharedServices
    ]
})
export class AuthSharedModule { }
