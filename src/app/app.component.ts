import { Component, OnInit } from '@angular/core';
import { AuthInterceptor } from './modules/auth/auth-shared/interceptor/auth.interceptor';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare let gtag: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

    constructor(private router: Router) {
        const navEndEvent = router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        );
        navEndEvent.subscribe((event: any) => {
            gtag('config', 'G-2W78D622DM', {
                'page_path': event.urlAfterRedirects
            })
        })
    }

    ngOnInit() {
        const currentToken  = localStorage.getItem('auth');
        if (currentToken !== null) {
            AuthInterceptor.accessToken = currentToken;
        }
    }
}
