import {Component, OnInit} from '@angular/core';
import {AuthSharedUserService} from "../../../../auth/auth-shared/services";
import {Router} from "@angular/router";


@Component({
    selector: 'app-dashboard-home-page-view',
    templateUrl: './dashboard-home-page-view.component.html',
    styleUrls: ['./dashboard-home-page-view.component.css']
})
export class DashboardHomePageViewComponent implements OnInit {

    constructor(private readonly authSharedUserService: AuthSharedUserService,
                private router: Router) {
    }
    isLogged: boolean | undefined;
    ngOnInit(): void {
        this.isLogged = this.authSharedUserService.isLogged()
    }

    public userOutput(): void {
        this.authSharedUserService.logOut();
        this.router.navigateByUrl('/');
        this.ngOnInit();
    }


}
