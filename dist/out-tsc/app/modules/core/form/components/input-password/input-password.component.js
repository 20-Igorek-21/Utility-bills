var InputPasswordComponent_1;
import { __decorate } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let InputPasswordComponent = InputPasswordComponent_1 = class InputPasswordComponent {
    constructor() {
        this.value = '';
        this.hide = true;
    }
    handleInput(value) {
        this.onChange(value);
    }
    writeValue(value) {
        this.value = value;
    }
    onChange(value) {
        this.value = value;
    }
    onTouched() { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
};
__decorate([
    Input()
], InputPasswordComponent.prototype, "label", void 0);
InputPasswordComponent = InputPasswordComponent_1 = __decorate([
    Component({
        selector: 'app-input-password',
        templateUrl: './input-password.component.html',
        styleUrls: ['./input-password.component.css'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputPasswordComponent_1),
                multi: true
            }
        ]
    })
], InputPasswordComponent);
export { InputPasswordComponent };
//# sourceMappingURL=input-password.component.js.map