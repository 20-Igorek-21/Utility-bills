import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
let UserSharedFetchAccountService = class UserSharedFetchAccountService {
    constructor(http) {
        this.http = http;
    }
    fetshAccount() {
        return this.http.get(environment.apiUrlTest)
            .pipe(map((res) => res));
    }
};
UserSharedFetchAccountService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserSharedFetchAccountService);
export { UserSharedFetchAccountService };
//# sourceMappingURL=user-shared-fetch-account.service.js.map