import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userSharedServices } from './services';
let UserSharedModule = class UserSharedModule {
};
UserSharedModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule
        ],
        providers: [
            ...userSharedServices
        ]
    })
], UserSharedModule);
export { UserSharedModule };
//# sourceMappingURL=user-shared.module.js.map