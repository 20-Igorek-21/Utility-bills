import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user-routing.module';
import { indicatorsModule } from './indicators/indicators.module';
import { UserSharedModule } from './user-shared/user-shared.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserPersonalCabinetModule } from './user-personal-cabinet/user-personal-cabinet.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserPersonalCabinetModule,
        indicatorsModule,
        UserSharedModule,
        UserProfileModule,
        RouterModule.forChild(userRoutes),

    ]
})
export class UserModule {
}
