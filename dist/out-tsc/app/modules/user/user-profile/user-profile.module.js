import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userProfileComponents } from './components';
import { FormModule } from '../../core/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { AuthSharedModule } from "../../auth/auth-shared/auth-shared.module";
import { LayoutPageModule } from "../../core/layout/layout-page/layout-page.module";
import { RouterModule } from "@angular/router";
import { LayoutFooterModule } from "../../core/layout/layout-footer/layout-footer.module";
let UserProfileModule = class UserProfileModule {
};
UserProfileModule = __decorate([
    NgModule({
        declarations: [
            ...userProfileComponents
        ],
        imports: [
            CommonModule,
            FormModule,
            ReactiveFormsModule,
            MatButtonModule,
            AuthSharedModule,
            LayoutPageModule,
            RouterModule,
            LayoutFooterModule
        ]
    })
], UserProfileModule);
export { UserProfileModule };
//# sourceMappingURL=user-profile.module.js.map