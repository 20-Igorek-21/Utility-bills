import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userSharedServices } from './services';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        ...userSharedServices
    ]
})
export class UserSharedModule { }
