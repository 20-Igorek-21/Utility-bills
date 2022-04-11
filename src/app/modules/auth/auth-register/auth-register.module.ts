import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {authRegisterComponents} from "./components";
import {FormModule} from "../../core/form/form.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ...authRegisterComponents
    ],
    imports: [
        CommonModule,
        FormModule,
        ReactiveFormsModule
    ],
    exports: [
        ...authRegisterComponents
    ]
})
export class AuthRegisterModule { }
