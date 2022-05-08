import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
let UserSharedDataUserAccountService = class UserSharedDataUserAccountService {
    constructor(http) {
        this.http = http;
    }
    createAccount(personalDataValue, addressValue, providersValue) {
        console.log(providersValue.vodokanalId);
        return this.http.post(environment.apiUrl + 'accounts/', {
            account: {
                fullName: personalDataValue.fullName,
                phone: personalDataValue.phone
            },
            addresses: {
                city: addressValue.city,
                street: addressValue.street,
                house: addressValue.house,
                flat: addressValue.flat
            },
            providers: [
                {
                    number: providersValue.gasNumber,
                    id: providersValue.gasId,
                    status: providersValue.gasStatus
                },
                {
                    number: providersValue.oblenergoNumber,
                    id: providersValue.oblenergoId,
                    status: providersValue.oblenergoStatus
                },
                {
                    number: providersValue.khimvoloknoNumber,
                    id: providersValue.khimvoloknoId,
                    status: providersValue.khimvoloknoStatus
                },
                {
                    number: providersValue.vodokanalNumber,
                    id: providersValue.vodokanalId,
                    status: providersValue.vodokanalStatus
                }
            ]
        })
            .pipe(map((res) => res));
    }
    changeAccount(personalDataValue, addressValue, providersValue) {
        return this.http.put(environment.apiUrl + 'accounts/', {
            account: {
                fullName: personalDataValue.fullName,
                phone: personalDataValue.phone
            },
            addresses: {
                city: addressValue.city,
                street: addressValue.street,
                house: addressValue.house,
                flat: addressValue.flat
            },
            providers: [
                {
                    number: providersValue.gasNumber,
                    id: providersValue.gasId,
                    status: providersValue.gasStatus
                },
                {
                    number: providersValue.oblenergoNumber,
                    id: providersValue.oblenergoId,
                    status: providersValue.oblenergoStatus
                },
                {
                    number: providersValue.khimvoloknoNumber,
                    id: providersValue.khimvoloknoId,
                    status: providersValue.khimvoloknoStatus
                },
                {
                    number: providersValue.vodokanalNumber,
                    id: providersValue.vodokanalId,
                    status: providersValue.vodokanalStatus
                }
            ]
        })
            .pipe(map((res) => res));
    }
    fetchAccount() {
        return this.http.get(environment.apiUrl + 'accounts/')
            .pipe(map((res) => res));
    }
    deleteAccount(id) {
        return this.http.delete(environment.apiUrl + 'accounts/' + id)
            .pipe(map((res) => console.log(res)));
    }
};
UserSharedDataUserAccountService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserSharedDataUserAccountService);
export { UserSharedDataUserAccountService };
//# sourceMappingURL=user-shared-data-user-account.service.js.map