import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout-page-header-navigation-dashboard',
    templateUrl: './main-layout-page-header-navigation-dashboard.component.html',
    styleUrls: ['./main-layout-page-header-navigation-dashboard.component.css']
})
export class MainLayoutPageHeaderNavigationDashboardComponent {

    public isShow = false;

    public switchMenu() {
        this.isShow = !this.isShow;
    }
}
