import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authValidators, ConfirmPasswordValidatorDirective } from './validators';


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

    ]
})
export class AuthSharedModule { }
