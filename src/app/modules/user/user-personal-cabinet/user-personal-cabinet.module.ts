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
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
    declarations: [
        ...userPersonalCabinetComponents,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormModule,
        LayoutPageModule,
        RouterModule,
        LayoutFooterModule,
        UserSharedModule,
        AuthSharedModule,
        MatStepperModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
    ],
    providers: []
})
export class UserPersonalCabinetModule {}
