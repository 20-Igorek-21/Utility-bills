import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
let UserSharedDataUserService = class UserSharedDataUserService {
    constructor(http) {
        this.http = http;
    }
    changeDataUser(id, profileValue) {
        return this.http.put(environment.apiUrl + id, {
            email: profileValue.value.email,
            password: profileValue.value.password
        });
    }
    fetchDataUser() {
        return this.http.get(environment.apiUrl)
            .pipe(map((res) => res));
    }
};
UserSharedDataUserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserSharedDataUserService);
export { UserSharedDataUserService };
//# sourceMappingURL=user-shared-data-user.service.js.map