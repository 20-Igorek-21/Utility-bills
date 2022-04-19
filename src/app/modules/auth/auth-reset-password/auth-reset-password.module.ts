import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {authResetPasswordComponents} from './components';
import {FormModule} from "../../core/form/form.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {LayoutPageModule} from "../../core/layout/layout-page/layout-page.module";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        ...authResetPasswordComponents
    ],
    imports: [
        CommonModule,
        FormModule,
        ReactiveFormsModule,
        MatButtonModule,
        LayoutPageModule,
        RouterModule
    ]
})
export class AuthResetPasswordModule { }
