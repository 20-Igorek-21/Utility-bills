import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
let ToggleButtonDirective = class ToggleButtonDirective {
    constructor() {
        this.isShowBurgerMenu = false;
        this.isShowEditorForm = false;
    }
    set showBurgerMenu(value) {
        this.isShowBurgerMenu = value;
    }
    set showEditorForm(value) {
        this.isShowEditorForm = value;
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
], ToggleButtonDirective.prototype, "isShowEditorForm", void 0);
__decorate([
    Input()
], ToggleButtonDirective.prototype, "showEditorForm", null);
ToggleButtonDirective = __decorate([
    Directive({
        selector: '[appToggleButton]'
    })
], ToggleButtonDirective);
export { ToggleButtonDirective };
//# sourceMappingURL=toggle-button.directive.js.map