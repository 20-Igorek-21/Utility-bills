import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
let ToggleButtonDirective = class ToggleButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isShowBurgerMenu = false;
        this.isShowFormAccount = false;
    }
    set showBurgerMenu(value) {
        this.isShowBurgerMenu = value;
    }
    set showFormAccount(value) {
        this.isShowFormAccount = value;
    }
    set showLayoutLock(value) {
        if (value) {
            this.elementRef.nativeElement.children[0].className = 'main-layout-page main-layout-page__lock';
        }
        else {
            this.elementRef.nativeElement.children[0].className = 'main-layout-page';
        }
    }
};
__decorate([
    HostBinding('class.main-navigation__switch-menu')
], ToggleButtonDirective.prototype, "isShowBurgerMenu", void 0);
__decorate([
    Input()
], ToggleButtonDirective.prototype, "showBurgerMenu", null);
__decorate([
    HostBinding('class.content-page__app-personal-cabinet-form-editor')
], ToggleButtonDirective.prototype, "isShowFormAccount", void 0);
__decorate([
    Input()
], ToggleButtonDirective.prototype, "showFormAccount", null);
__decorate([
    Input()
], ToggleButtonDirective.prototype, "showLayoutLock", null);
ToggleButtonDirective = __decorate([
    Directive({
        selector: '[appToggleButton]'
    })
], ToggleButtonDirective);
export { ToggleButtonDirective };
//# sourceMappingURL=toggle-button.directive.js.map