import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userSharedServices } from './services';
import {userIndicatorsDirectives} from "./directives";

@NgModule({
    declarations: [
        ...userIndicatorsDirectives
    ],
    exports: [
        ...userIndicatorsDirectives
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ...userSharedServices
    ]
})
export class UserSharedModule { }
