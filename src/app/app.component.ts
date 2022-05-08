import { Component, OnInit } from '@angular/core';
import { AuthSharedUserService } from './modules/auth/auth-shared/services';
import { AuthInterceptor } from './modules/auth/auth-shared/interceptor/auth.interceptor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{

    constructor( private authService: AuthSharedUserService) {}

    ngOnInit() {
        const currentToken  = localStorage.getItem('auth');
        if (currentToken !== null) {
            AuthInterceptor.accessToken = currentToken;
        }
    }
}
