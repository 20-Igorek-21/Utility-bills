import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
let SwitchMenuDirective = class SwitchMenuDirective {
    constructor() {
        this.isShowMenu = false;
    }
    set isShow(value) {
        this.isShowMenu = value;
    }
};
__decorate([
    HostBinding('class.main-navigation__switch-menu')
], SwitchMenuDirective.prototype, "isShowMenu", void 0);
__decorate([
    Input()
], SwitchMenuDirective.prototype, "isShow", null);
SwitchMenuDirective = __decorate([
    Directive({
        selector: '[appSwitchMenu]'
    })
], SwitchMenuDirective);
export { SwitchMenuDirective };
//# sourceMappingURL=switch-menu.directive.js.map