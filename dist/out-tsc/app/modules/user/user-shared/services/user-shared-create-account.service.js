import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
let UserSharedCreateAccountService = class UserSharedCreateAccountService {
    constructor(http) {
        this.http = http;
    }
    createAccount(credentialsValue, addressValue, gasProviderValue, khimvoloknoProviderValue, vodokanalProviderValue, oblenergoProviderValue) {
        return this.http.post(environment.apiUrlTest, {
            credentials: {
                fullName: credentialsValue.fullName,
                phone: credentialsValue.phone
            },
            addresses: {
                city: addressValue.city,
                street: addressValue.street,
                house: addressValue.house,
                apartment: addressValue.apartment
            },
            providers: [
                {
                    name: gasProviderValue.name,
                    code: gasProviderValue.code,
                    status: gasProviderValue.status
                },
                {
                    name: khimvoloknoProviderValue.name,
                    code: khimvoloknoProviderValue.code,
                    status: khimvoloknoProviderValue.status
                },
                {
                    name: vodokanalProviderValue.name,
                    code: vodokanalProviderValue.code,
                    status: vodokanalProviderValue.status
                },
                {
                    name: oblenergoProviderValue.name,
                    code: oblenergoProviderValue.code,
                    status: oblenergoProviderValue.status
                }
            ]
        });
    }
};
UserSharedCreateAccountService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserSharedCreateAccountService);
export { UserSharedCreateAccountService };
//# sourceMappingURL=user-shared-create-account.service.js.map