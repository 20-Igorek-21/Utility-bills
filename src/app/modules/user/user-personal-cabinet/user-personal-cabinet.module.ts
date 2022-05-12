import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { FormModule } from '../../core/form/form.module';
import { LayoutPageModule } from '../../core/layout/layout-page/layout-page.module';
import { RouterModule } from '@angular/router';
import { LayoutFooterModule } from '../../core/layout/layout-footer/layout-footer.module';
import { userPersonalCabinetComponents } from './components';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserSharedModule } from '../user-shared/user-shared.module';
import { AuthSharedModule } from '../../auth/auth-shared/auth-shared.module';
import { UserPersonalCabinetMaterialModule } from './user-personal-cabinet-material.module';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        ...userPersonalCabinetComponents,
    ],
    imports: [
        CommonModule,
        UserPersonalCabinetMaterialModule,
        ReactiveFormsModule,
        FormModule,
        MatProgressSpinnerModule,
        LayoutPageModule,
        RouterModule,
        LayoutFooterModule,
        UserSharedModule,
        AuthSharedModule,
        MatStepperModule,
        MatButtonModule
    ],
    providers: []
})
export class UserPersonalCabinetModule {}
