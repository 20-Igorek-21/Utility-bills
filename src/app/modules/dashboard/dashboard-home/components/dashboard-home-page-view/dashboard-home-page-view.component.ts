import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard-home-page-view',
    templateUrl: './dashboard-home-page-view.component.html',
    styleUrls: ['./dashboard-home-page-view.component.css']
})
export class DashboardHomePageViewComponent {

    constructor( private router: Router) { }

    public login() {
        this.router.navigateByUrl('auth/login');
    }
}
