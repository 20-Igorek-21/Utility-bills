import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalCabinetComponents } from './components';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModule} from '../../core/form/form.module';
import {MatButtonModule} from '@angular/material/button';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [
        ...personalCabinetComponents,


    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormModule,
        MatButtonModule,
        MatStepperModule,
        MatInputModule
    ]
})
export class PersonalCabinetModule { }
