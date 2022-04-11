import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authValidators } from './validators';


@NgModule({
    declarations: [
        ...authValidators,
    ],
    imports: [
        CommonModule
    ]
})
export class AuthSharedModule { }
