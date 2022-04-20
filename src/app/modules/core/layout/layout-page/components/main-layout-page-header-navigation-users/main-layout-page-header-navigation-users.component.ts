import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout-page-header-navigation-users',
    templateUrl: './main-layout-page-header-navigation-users.component.html',
    styleUrls: ['./main-layout-page-header-navigation-users.component.css']
})
export class MainLayoutPageHeaderNavigationUsersComponent {

    public isShow = false;

    public switchMenu() {
        this.isShow = !this.isShow;
    }

}
