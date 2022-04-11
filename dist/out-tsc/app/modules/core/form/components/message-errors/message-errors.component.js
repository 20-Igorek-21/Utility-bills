import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
let MessageErrorsComponent = class MessageErrorsComponent {
    constructor() {
        this.minLengthSymbol = MIN_LENGTH_SYMBOL;
    }
};
__decorate([
    Input()
], MessageErrorsComponent.prototype, "controlsName", void 0);
MessageErrorsComponent = __decorate([
    Component({
        selector: 'app-message-errors',
        templateUrl: './message-errors.component.html',
        styleUrls: ['./message-errors.component.css']
    })
], MessageErrorsComponent);
export { MessageErrorsComponent };
//# sourceMappingURL=message-errors.component.js.map