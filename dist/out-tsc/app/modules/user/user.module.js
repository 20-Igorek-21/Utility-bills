import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routing.module';
import { PersonalCabinetModule } from './personal-cabinet/personal-cabinet.module';
import { indicatorsModule } from './indicators/indicators.module';
import { UserSharedModule } from './user-shared/user-shared.module';
let UserModule = class UserModule {
};
UserModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            PersonalCabinetModule,
            indicatorsModule,
            UserSharedModule,
            RouterModule.forChild(userRoutes)
        ]
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map