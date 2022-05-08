import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { map } from 'rxjs';
let UserSharedDataUserProvidersService = class UserSharedDataUserProvidersService {
    constructor(http) {
        this.http = http;
    }
    sendIndicators(indicators, id) {
        return this.http.post(environment.apiUrl + 'transfer/' + id, [
            {
                provider: 'd6bec95b-1345-44a0-9d85-64a038382005',
                value: indicators.gasIndicator
            },
            {
                provider: '38b5c1ab-24fb-4c4c-8351-5e9dcdcc8778',
                value: indicators.energyIndicator
            },
            {
                provider: '2f0906c2-9ffe-4327-9015-de9a483dcbeb',
                value: indicators.tecIndicator
            },
            {
                provider: 'c3f89ec7-ae6a-4c9a-8ee3-c9081c1b330b',
                value: indicators.waterIndicator
            }
        ])
            .pipe(map((res) => res));
    }
};
UserSharedDataUserProvidersService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserSharedDataUserProvidersService);
export { UserSharedDataUserProvidersService };
//# sourceMappingURL=user-shared-data-user-providers.service.js.map