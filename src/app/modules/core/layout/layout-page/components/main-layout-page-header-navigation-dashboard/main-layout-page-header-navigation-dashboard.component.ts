import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout-page-header-navigation-dashboard',
    templateUrl: './main-layout-page-header-navigation-dashboard.component.html',
    styleUrls: ['./main-layout-page-header-navigation-dashboard.component.css']
})
export class MainLayoutPageHeaderNavigationDashboardComponent {

    public isShowBurgerMenu = false;

    public switchMenu() {
        this.isShowBurgerMenu = !this.isShowBurgerMenu;
    }
    isAlertOpen  = false;
    test() {
        this.isAlertOpen = !this.isAlertOpen;
    }
}
