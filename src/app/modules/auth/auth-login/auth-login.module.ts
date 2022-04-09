import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageModule } from '../../core/layout/layout-page/layout-page.module';
import { authLoginComponents } from './components';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        ...authLoginComponents
    ],
    imports: [
        CommonModule,
        LayoutPageModule,
        RouterModule
    ]
})
export class AuthLoginModule { }
