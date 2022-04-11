import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {authValidators, ConfirmPasswordValidatorDirective} from './validators';


@NgModule({
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
export class AuthSharedModule { }
