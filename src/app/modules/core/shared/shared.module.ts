import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedServices } from './services';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [

    ],
    providers: [
        ...sharedServices
    ]
})
export class SharedModule { }
