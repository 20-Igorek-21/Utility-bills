import { __decorate } from "tslib";
import { Directive, HostListener } from '@angular/core';
let OnlyNumberDirective = class OnlyNumberDirective {
    constructor(el) {
        this.el = el;
        this.regex = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    onKeyDown(event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        const current = this.el.nativeElement.value;
        const next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
};
__decorate([
    HostListener('keydown', ['$event'])
], OnlyNumberDirective.prototype, "onKeyDown", null);
OnlyNumberDirective = __decorate([
    Directive({
        selector: '[OnlyNumber]'
    })
], OnlyNumberDirective);
export { OnlyNumberDirective };
//# sourceMappingURL=onlynumber.directive.js.map