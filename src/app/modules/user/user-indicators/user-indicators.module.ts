import { NgModule } from '@angular/core';
import { userIndicatorsComponents } from './components';
import { FormModule } from '../../core/form/form.module';
import { LayoutFooterModule } from '../../core/layout/layout-footer/layout-footer.module';
import { LayoutPageModule } from '../../core/layout/layout-page/layout-page.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSharedModule } from '../user-shared/user-shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserIndicatorsMaterialModule } from './user-indicators-material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    declarations: [
        ...userIndicatorsComponents,
    ],
    imports: [
        FormModule,
        LayoutFooterModule,
        LayoutPageModule,
        RouterModule,
        CommonModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        FormsModule,
        UserSharedModule,
        UserIndicatorsMaterialModule,
        MatButtonModule,
        MatProgressBarModule
    ]
})
export class UserIndicatorsModule { }
