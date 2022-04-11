import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { layoutPageComponents } from './components';
import {MatToolbarModule} from "@angular/material/toolbar";
import { SwitchMenuDirective } from './directives/switch-menu.directive';


@NgModule({
    declarations: [
        ...layoutPageComponents,
        SwitchMenuDirective,

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
