import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
let PersonalCabinetService = class PersonalCabinetService {
    constructor(http) {
        this.http = http;
        this.URL = 'http://localhost:3000/accounts';
    }
    createAccount(credentialsValue, addressValue, gasProviderValue, khimvoloknoProviderValue, vodokanalProviderValue, oblenergoProviderValue) {
        return this.http.post(this.URL, {
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
    fetshAccount() {
        return this.http.get(this.URL)
            .pipe(map((res) => res));
    }
};
PersonalCabinetService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PersonalCabinetService);
export { PersonalCabinetService };
//# sourceMappingURL=personal-cabinet.service.js.map