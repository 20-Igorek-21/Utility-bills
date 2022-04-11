var InputFieldComponent_1;
import { __decorate } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let InputFieldComponent = InputFieldComponent_1 = class InputFieldComponent {
    constructor() {
        this.value = '';
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
], InputFieldComponent.prototype, "label", void 0);
__decorate([
    Input()
], InputFieldComponent.prototype, "type", void 0);
InputFieldComponent = InputFieldComponent_1 = __decorate([
    Component({
        selector: 'app-input-field',
        templateUrl: './input-field.component.html',
        styleUrls: ['./input-field.component.css'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputFieldComponent_1),
                multi: true
            }
        ]
    })
], InputFieldComponent);
export { InputFieldComponent };
//# sourceMappingURL=input-field.component.js.map