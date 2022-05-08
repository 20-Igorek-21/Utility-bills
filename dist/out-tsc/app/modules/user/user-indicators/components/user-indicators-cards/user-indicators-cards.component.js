var UserIndicatorsCardsComponent_1;
import { __decorate } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
let UserIndicatorsCardsComponent = UserIndicatorsCardsComponent_1 = class UserIndicatorsCardsComponent {
    constructor() {
        this.value = '';
        this.title = '';
        this.itemIcon = '';
    }
    handleInput(value) {
        this.onChange(value);
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
__decorate([
    Input()
], UserIndicatorsCardsComponent.prototype, "value", void 0);
__decorate([
    Input()
], UserIndicatorsCardsComponent.prototype, "title", void 0);
__decorate([
    Input()
], UserIndicatorsCardsComponent.prototype, "itemIcon", void 0);
UserIndicatorsCardsComponent = UserIndicatorsCardsComponent_1 = __decorate([
    Component({
        selector: 'app-user-indicators-cards',
        templateUrl: './user-indicators-cards.component.html',
        styleUrls: ['./user-indicators-cards.component.css'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UserIndicatorsCardsComponent_1),
                multi: true
            }
        ]
    })
], UserIndicatorsCardsComponent);
export { UserIndicatorsCardsComponent };
//# sourceMappingURL=user-indicators-cards.component.js.map