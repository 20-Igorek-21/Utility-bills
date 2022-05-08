import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routing.module';
import { UserIndicatorsModule } from './user-indicators/user-indicators.module';
import { UserSharedModule } from './user-shared/user-shared.module';

import { UserPersonalCabinetModule } from './user-personal-cabinet/user-personal-cabinet.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserPersonalCabinetModule,
        UserIndicatorsModule,
        UserSharedModule,
        RouterModule.forChild(userRoutes),

    ]
})
export class UserModule {
}
