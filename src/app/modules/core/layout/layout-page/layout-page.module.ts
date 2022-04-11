import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { layoutPageComponents } from './components';
import {layoutPageDirectives} from './directives';

@NgModule({
    declarations: [
        ...layoutPageComponents,
        ...layoutPageDirectives
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
