import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userSharedServices } from './services';
import { userIndicatorsDirectives } from './directives';
import { userSharedComponents } from './components';
import { FormModule } from '../../core/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [
        ...userIndicatorsDirectives,
        ...userSharedComponents,
    ],
    exports: [
        ...userIndicatorsDirectives,
        ...userSharedComponents
    ],
    imports: [
        CommonModule,
        FormModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatStepperModule,
        MatButtonModule,
        NgxMaskModule,
    ],
    providers: [
        ...userSharedServices
    ]
})
export class UserSharedModule { }
