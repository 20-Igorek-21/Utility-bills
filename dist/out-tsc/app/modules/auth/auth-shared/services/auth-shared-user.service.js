import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
let AuthSharedUserService = class AuthSharedUserService {
    constructor(http) {
        this.http = http;
    }
    registerUser(registerValue) {
        return this.http.post(environment.apiUrl + 'register/', {
            email: registerValue.value.email,
            password: registerValue.value.password,
        });
    }
    resetPassword(resetPasswordValue) {
        return this.http.post(environment.apiUrl, {
            email: resetPasswordValue.value.email
        });
    }
    loginUser(loginValue) {
        return this.http.post(environment.apiUrl + 'login/', {
            email: loginValue.value.email,
            password: loginValue.value.password
        })
            .pipe(tap(({ token }) => {
            // localStorage.setItem('auth', token);
            AuthInterceptor.accessToken = token;
        }));
    }
    refreshToken() {
        return this.http.get(environment.apiUrl + 'refresh/')
            .pipe(tap(({ token }) => {
            AuthInterceptor.accessToken = token;
        }));
    }
    logOut() {
        localStorage.clear();
        AuthInterceptor.accessToken = '';
    }
};
AuthSharedUserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthSharedUserService);
export { AuthSharedUserService };
//# sourceMappingURL=auth-shared-user.service.js.map