import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalCabinetComponents } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../../core/form/form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { LayoutPageModule } from '../../core/layout/layout-page/layout-page.module';
import { RouterModule } from '@angular/router';
import { LayoutFooterModule } from '../../core/layout/layout-footer/layout-footer.module';
let PersonalCabinetModule = class PersonalCabinetModule {
};
PersonalCabinetModule = __decorate([
    NgModule({
        declarations: [
            ...personalCabinetComponents,
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
        ],
        providers: []
    })
], PersonalCabinetModule);
export { PersonalCabinetModule };
//# sourceMappingURL=personal-cabinet.module.js.map