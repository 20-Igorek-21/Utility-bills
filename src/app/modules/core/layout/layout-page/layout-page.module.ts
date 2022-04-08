import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { layoutComponents } from './components';

@NgModule({
    declarations: [
        ...layoutComponents,
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutPageModule { }
