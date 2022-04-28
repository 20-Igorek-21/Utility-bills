import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
let AuthSharedUserService = class AuthSharedUserService {
    constructor(http) {
        this.http = http;
        this.token = '';
    }
    registerUser(registerValue) {
        return this.http.post(environment.apiUrl, {
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
        return this.http.post(environment.apiUrl, {
            name: loginValue.value.email,
            password: loginValue.value.password
        });
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
};
AuthSharedUserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthSharedUserService);
export { AuthSharedUserService };
//# sourceMappingURL=auth-shared-user.service.js.map