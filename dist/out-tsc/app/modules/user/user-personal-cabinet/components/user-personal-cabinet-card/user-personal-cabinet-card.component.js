import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
let UserPersonalCabinetCardComponent = class UserPersonalCabinetCardComponent {
    constructor(userSharedDataAccountService) {
        this.userSharedDataAccountService = userSharedDataAccountService;
        this.subscription = new Subscription();
        this.deleteCard = new EventEmitter;
        this.changeCard = new EventEmitter;
        this.changeMessageTrue = new EventEmitter;
    }
    ngOnInit() {
        // if (this.card.id) {
        //     localStorage.setItem('card',this.card.id);
        // }
        //
        // if (this.card.addresses?.flat === null) {
        //     this.flat = null
        // } else {
        //     this.flat = this.card.addresses?.flat
        // }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onEditCard(id) {
        this.changeCard.emit();
    }
    onDeleteCard(id) {
        this.subscription.add(this.userSharedDataAccountService.deleteAccount(id)
            .subscribe(() => {
            this.deleteCard.emit();
        }, error => {
            console.log(error);
        }));
    }
    onSelect(id) {
        console.log(id);
        // localStorage.setItem('card',this.card.id)
    }
};
__decorate([
    Input()
], UserPersonalCabinetCardComponent.prototype, "card", void 0);
__decorate([
    Output()
], UserPersonalCabinetCardComponent.prototype, "deleteCard", void 0);
__decorate([
    Output()
], UserPersonalCabinetCardComponent.prototype, "changeCard", void 0);
__decorate([
    Output()
], UserPersonalCabinetCardComponent.prototype, "changeMessageTrue", void 0);
UserPersonalCabinetCardComponent = __decorate([
    Component({
        selector: 'app-user-personal-cabinet-card',
        templateUrl: './user-personal-cabinet-card.component.html',
        styleUrls: ['./user-personal-cabinet-card.component.css']
    })
], UserPersonalCabinetCardComponent);
export { UserPersonalCabinetCardComponent };
//# sourceMappingURL=user-personal-cabinet-card.component.js.map