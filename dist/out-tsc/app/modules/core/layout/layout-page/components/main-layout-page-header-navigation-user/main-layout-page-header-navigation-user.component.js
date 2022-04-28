import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
let MainLayoutPageHeaderNavigationUserComponent = class MainLayoutPageHeaderNavigationUserComponent {
    constructor() {
        this.isShowBurgerMenu = false;
        this.isShowLayoutLock = new EventEmitter();
    }
    switchMenu() {
        this.isShowBurgerMenu = !this.isShowBurgerMenu;
        this.isShowLayoutLock.emit(this.isShowBurgerMenu);
    }
};
__decorate([
    Output()
], MainLayoutPageHeaderNavigationUserComponent.prototype, "isShowLayoutLock", void 0);
MainLayoutPageHeaderNavigationUserComponent = __decorate([
    Component({
        selector: 'app-main-layout-page-header-navigation-user',
        templateUrl: './main-layout-page-header-navigation-user.component.html',
        styleUrls: ['./main-layout-page-header-navigation-user.component.css']
    })
], MainLayoutPageHeaderNavigationUserComponent);
export { MainLayoutPageHeaderNavigationUserComponent };
//# sourceMappingURL=main-layout-page-header-navigation-user.component.js.map