import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user-routing.module';
import {PersonalCabinetModule} from './personal-cabinet/personal-cabinet.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PersonalCabinetModule,
        RouterModule.forChild(userRoutes)
    ]
})
export class UserModule {
}
