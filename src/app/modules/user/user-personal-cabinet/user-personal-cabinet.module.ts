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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {UserSharedModule} from '../user-shared/user-shared.module';
import {AuthSharedModule} from '../../auth/auth-shared/auth-shared.module';


@NgModule({
    declarations: [
        ...userPersonalCabinetComponents,
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
        MatCheckboxModule,
        MatRadioModule,
        UserSharedModule,
        AuthSharedModule,
    ],
    providers: []
})
export class UserPersonalCabinetModule { }
