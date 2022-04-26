import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
let AuthSharedUserService = class AuthSharedUserService {
    constructor(http) {
        this.http = http;
    }
    registerUser(registerValue) {
        return this.http.post(environment.apiUrl, {
            email: registerValue.value.email,
            password: registerValue.value.password
        });
    }
};
AuthSharedUserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthSharedUserService);
export { AuthSharedUserService };
//# sourceMappingURL=auth-shared-user.service.js.map