import { Component } from '@angular/core';
import {AuthSharedUserService} from '../../../../../auth/auth-shared/services';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main-layout-page-header-navigation-user',
    templateUrl: './main-layout-page-header-navigation-user.component.html',
    styleUrls: ['./main-layout-page-header-navigation-user.component.css']
})
export class MainLayoutPageHeaderNavigationUserComponent {

    constructor(private readonly authSharedUserService: AuthSharedUserService,
                private router: Router) {
    }

    public onHomePage() {
        this.authSharedUserService.logOut();
        this.router.navigateByUrl('/');
    }
}
