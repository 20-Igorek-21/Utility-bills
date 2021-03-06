import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routing.module';
import { UserIndicatorsModule } from './user-indicators/user-indicators.module';
import { UserSharedModule } from './user-shared/user-shared.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserPersonalCabinetModule } from './user-personal-cabinet/user-personal-cabinet.module';
let UserModule = class UserModule {
};
UserModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            UserPersonalCabinetModule,
            UserIndicatorsModule,
            UserSharedModule,
            UserProfileModule,
            RouterModule.forChild(userRoutes),
        ]
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map