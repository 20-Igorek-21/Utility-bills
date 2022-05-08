import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
let UserIndicatorsAccountComponent = class UserIndicatorsAccountComponent {
    constructor(userSharedDataAccountService) {
        this.userSharedDataAccountService = userSharedDataAccountService;
        this.flatText = '';
        this.iconNameExpend = 'more';
        this.isShowExpand = true;
        this.subscription = new Subscription();
        this.deleteAccount = new EventEmitter;
        this.editAccount = new EventEmitter;
    }
    ngOnInit() {
        var _a;
        if (this.card.id) {
            localStorage.setItem('card', this.card.id);
        }
        if (((_a = this.card.address) === null || _a === void 0 ? void 0 : _a.flat) === null) {
            this.flatText = '';
        }
        else {
            this.flatText = ', кв.';
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onShowExpand() {
        this.isShowExpand = !this.isShowExpand;
        this.iconNameExpend = this.iconNameExpend == 'more' ? 'few' : 'more';
    }
    onEditAccount(id) {
        this.editAccount.emit(id);
    }
    onDeleteAccount(id) {
        console.log(id);
        this.subscription.add(this.userSharedDataAccountService.deleteAccount(id)
            .subscribe(() => {
            this.deleteAccount.emit();
        }, error => {
            console.log(error);
        }));
    }
    onSelect(id) {
        localStorage.setItem('card', id);
    }
};
__decorate([
    Input()
], UserIndicatorsAccountComponent.prototype, "card", void 0);
__decorate([
    Output()
], UserIndicatorsAccountComponent.prototype, "deleteAccount", void 0);
__decorate([
    Output()
], UserIndicatorsAccountComponent.prototype, "editAccount", void 0);
UserIndicatorsAccountComponent = __decorate([
    Component({
        selector: 'app-user-indicators-account',
        templateUrl: './user-indicators-account.component.html',
        styleUrls: ['./user-indicators-account.component.css']
    })
], UserIndicatorsAccountComponent);
export { UserIndicatorsAccountComponent };
//# sourceMappingURL=user-indicators-account.component.js.map