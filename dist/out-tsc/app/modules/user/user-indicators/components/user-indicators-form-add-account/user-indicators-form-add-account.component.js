import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
let UserIndicatorsFormAddAccountComponent = class UserIndicatorsFormAddAccountComponent {
    constructor(userSharedDataAccountService, router) {
        this.userSharedDataAccountService = userSharedDataAccountService;
        this.router = router;
        this.subscription = new Subscription();
        this.isCloseFormAccount = new EventEmitter;
        this.fetchData = new EventEmitter;
        this.plugForm = new FormGroup({});
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onCloseWindow() {
        this.resetForm();
    }
    resetForm() {
        this.formPersonalData.personalDataForm.reset();
        this.formAddress.addressForm.reset();
        this.formProviders.providersForm.reset();
        this.isCloseFormAccount.emit();
    }
    addDataAccount() {
        this.subscription.add(this.userSharedDataAccountService.createAccount(this.formPersonalData.personalDataForm.value, this.formAddress.addressForm.value, this.formProviders.providersForm.value).subscribe((res) => {
            console.log(res);
            this.fetchData.emit();
        }, error => {
            console.log(error);
        }));
        this.resetForm();
    }
};
__decorate([
    ViewChild('formPersonalData')
], UserIndicatorsFormAddAccountComponent.prototype, "formPersonalData", void 0);
__decorate([
    ViewChild('formAddress')
], UserIndicatorsFormAddAccountComponent.prototype, "formAddress", void 0);
__decorate([
    ViewChild('formProviders')
], UserIndicatorsFormAddAccountComponent.prototype, "formProviders", void 0);
__decorate([
    Output()
], UserIndicatorsFormAddAccountComponent.prototype, "isCloseFormAccount", void 0);
__decorate([
    Output()
], UserIndicatorsFormAddAccountComponent.prototype, "fetchData", void 0);
UserIndicatorsFormAddAccountComponent = __decorate([
    Component({
        selector: 'app-user-indicators-form-add-account',
        templateUrl: './user-indicators-form-add-account.component.html',
        styleUrls: ['./user-indicators-form-add-account.component.css']
    })
], UserIndicatorsFormAddAccountComponent);
export { UserIndicatorsFormAddAccountComponent };
//# sourceMappingURL=user-indicators-form-add-account.component.js.map