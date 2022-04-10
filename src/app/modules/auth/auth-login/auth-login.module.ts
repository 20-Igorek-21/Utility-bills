import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageModule } from '../../core/layout/layout-page/layout-page.module';
import { authLoginComponents } from './components';
import { RouterModule } from '@angular/router';
import { FormModule } from '../../core/form/form.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ...authLoginComponents
    ],
    imports: [
        CommonModule,
        LayoutPageModule,
        RouterModule,
        FormModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatButtonModule,
    ],
    exports: [
        ...authLoginComponents
    ]
})

export class AuthLoginModule {}
