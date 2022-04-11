import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {authRegisterComponents} from "./components";
import {FormModule} from "../../core/form/form.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutPageModule} from "../../core/layout/layout-page/layout-page.module";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        ...authRegisterComponents
    ],
    imports: [
        CommonModule,
        FormModule,
        ReactiveFormsModule,
        LayoutPageModule,
        MatButtonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        ...authRegisterComponents
    ]
})
export class AuthRegisterModule { }
