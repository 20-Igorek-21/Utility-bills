import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { layoutPageComponents } from './components';
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
    declarations: [
        ...layoutPageComponents,

    ],
    exports: [
        ...layoutPageComponents,
    ],
    imports: [
        CommonModule,
        MatToolbarModule,


    ]
})
export class LayoutPageModule { }
