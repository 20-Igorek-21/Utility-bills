import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
let UserIndicatorsSectionAccountsComponent = class UserIndicatorsSectionAccountsComponent {
    constructor(userSharedDataAccountService) {
        this.userSharedDataAccountService = userSharedDataAccountService;
        this.isShowFormAccount = true;
        this.cards = [];
        this.subscription = new Subscription();
        this.isLockEditorForm = new EventEmitter();
        this.isUnLockEditorForm = new EventEmitter();
        this.isLoader = new EventEmitter();
        this.fetchData();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    fetchData() {
        this.subscription.add(this.userSharedDataAccountService.fetchAccount()
            .pipe(finalize(() => {
            this.isLoader.emit(false);
        }))
            .subscribe((data) => {
            console.log(data);
            this.cards = data;
            if (this.cards.length === 0) {
                localStorage.removeItem('card');
                // this.onShowFormAccount()
            }
        }, error => {
            console.log(error);
        }));
    }
    onEditAccount(id) {
        console.log(id);
    }
    onShowFormAccount() {
        this.isShowFormAccount = false;
        this.isLockEditorForm.emit(false);
    }
    isCloseFormAccount() {
        this.isShowFormAccount = true;
        this.isUnLockEditorForm.emit(true);
    }
};
__decorate([
    Output()
], UserIndicatorsSectionAccountsComponent.prototype, "isLockEditorForm", void 0);
__decorate([
    Output()
], UserIndicatorsSectionAccountsComponent.prototype, "isUnLockEditorForm", void 0);
__decorate([
    Output()
], UserIndicatorsSectionAccountsComponent.prototype, "isLoader", void 0);
UserIndicatorsSectionAccountsComponent = __decorate([
    Component({
        selector: 'app-user-indicators-section-accounts',
        templateUrl: './user-indicators-section-accounts.component.html',
        styleUrls: ['./user-indicators-section-accounts.component.css']
    })
], UserIndicatorsSectionAccountsComponent);
export { UserIndicatorsSectionAccountsComponent };
//# sourceMappingURL=user-indicators-section-accounts.component.js.map