import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule} from '@angular/forms';
import { FormModule } from '../../core/form/form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { LayoutPageModule } from '../../core/layout/layout-page/layout-page.module';
import { RouterModule } from '@angular/router';
import { LayoutFooterModule } from '../../core/layout/layout-footer/layout-footer.module';
import { userPersonalCabinetComponents } from './components';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    declarations: [
        ...userPersonalCabinetComponents
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormModule,
        MatButtonModule,
        MatStepperModule,
        LayoutPageModule,
        RouterModule,
        LayoutFooterModule,
        MatProgressSpinnerModule,
    ],
    providers: []
})
export class UserPersonalCabinetModule { }
