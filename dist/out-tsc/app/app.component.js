import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { AuthInterceptor } from './modules/auth/auth-shared/interceptor/auth.interceptor';
let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        const currentToken = localStorage.getItem('auth');
        if (currentToken !== null) {
            AuthInterceptor.accessToken = currentToken;
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map