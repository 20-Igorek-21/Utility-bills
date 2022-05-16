import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-layout-page-header-navigation-user',
    templateUrl: './main-layout-page-header-navigation-user.component.html',
    styleUrls: ['./main-layout-page-header-navigation-user.component.css']
})
export class MainLayoutPageHeaderNavigationUserComponent {

    constructor(private router: Router) {}

    public onHomePage() {
        this.router.navigateByUrl('/');
    }
}
