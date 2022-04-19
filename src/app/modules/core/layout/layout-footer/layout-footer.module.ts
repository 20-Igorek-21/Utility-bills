import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {layoutFooterComponents, LayoutFooterViewComponent} from './components';

@NgModule({
    declarations: [
        ...layoutFooterComponents
    ],
    exports: [
        LayoutFooterViewComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutFooterModule { }
