import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-main-layout-page-header-navigation-user',
    templateUrl: './main-layout-page-header-navigation-user.component.html',
    styleUrls: ['./main-layout-page-header-navigation-user.component.css']
})
export class MainLayoutPageHeaderNavigationUserComponent {

    public isShowBurgerMenu = false;
    @Output() isShowLayoutLock = new EventEmitter()

    public switchMenu() {
        this.isShowBurgerMenu = !this.isShowBurgerMenu;
        this.isShowLayoutLock.emit(this.isShowBurgerMenu)
    }

}
