import { Component } from '@angular/core';

@Component({
    selector: 'app-main-layout-page-header-navigation-user',
    templateUrl: './main-layout-page-header-navigation-user.component.html',
    styleUrls: ['./main-layout-page-header-navigation-user.component.css']
})
export class MainLayoutPageHeaderNavigationUserComponent {

    public isShow = false;

    public switchMenu() {
        this.isShow = !this.isShow;
    }

}
