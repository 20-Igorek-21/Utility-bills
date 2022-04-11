var ConfirmPasswordValidatorDirective_1;
import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
let ConfirmPasswordValidatorDirective = ConfirmPasswordValidatorDirective_1 = class ConfirmPasswordValidatorDirective {
    validate(control) {
        var _a;
        const controlToCompare = (_a = control.parent) === null || _a === void 0 ? void 0 : _a.get(this.appConfirmPasswordValidator);
        if ((controlToCompare === null || controlToCompare === void 0 ? void 0 : controlToCompare.value) !== control.value) {
            return { 'notMatch': true };
        }
        return null;
    }
};
__decorate([
    Input()
], ConfirmPasswordValidatorDirective.prototype, "appConfirmPasswordValidator", void 0);
ConfirmPasswordValidatorDirective = ConfirmPasswordValidatorDirective_1 = __decorate([
    Directive({
        selector: '[appConfirmPasswordValidator]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: ConfirmPasswordValidatorDirective_1,
                multi: true
            }
        ]
    })
], ConfirmPasswordValidatorDirective);
export { ConfirmPasswordValidatorDirective };
//# sourceMappingURL=confirm-password-validator.directive.js.map