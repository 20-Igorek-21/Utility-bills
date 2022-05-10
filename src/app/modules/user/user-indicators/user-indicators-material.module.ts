import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        MatStepperModule,
        MatIconModule,
        MatSnackBarModule,
    ]
})
export class UserIndicatorsMaterialModule { }
