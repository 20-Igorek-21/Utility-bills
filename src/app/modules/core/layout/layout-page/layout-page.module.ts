import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { layoutPageComponents } from './components';
import { layoutPageDirectives } from './directives';
import { RouterModule } from '@angular/router';
import { MainLayoutPageRequestLoadingComponent } from './components/main-layout-page-request-loading/main-layout-page-request-loading.component';

@NgModule({
    declarations: [
        ...layoutPageComponents,
        ...layoutPageDirectives,
        MainLayoutPageRequestLoadingComponent,
    ],
    exports: [
        ...layoutPageComponents,
        ...layoutPageDirectives,
        MainLayoutPageRequestLoadingComponent,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule,
    ]
})
export class LayoutPageModule { }
