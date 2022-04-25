import { NgModule } from '@angular/core';
import {indicatorsComponents} from "./components";
import {FormModule} from "../../core/form/form.module";
import {LayoutFooterModule} from "../../core/layout/layout-footer/layout-footer.module";
import {LayoutPageModule} from "../../core/layout/layout-page/layout-page.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
    declarations: [
        ...indicatorsComponents,
    ],
    imports: [
        FormModule,
        LayoutFooterModule,
        LayoutPageModule,
        RouterModule,
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule

    ]
})
export class indicatorsModule { }
