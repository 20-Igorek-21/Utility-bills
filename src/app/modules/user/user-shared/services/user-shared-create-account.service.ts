import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {
    IUserAccountAddress,
    IUserAccountCredential,
    IUserAccountProvider
} from '../types/user-shared-account.interface';
import {environment} from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserSharedCreateAccountService {

    constructor(private readonly http: HttpClient) {}

    createAccount(
        credentialsValue: IUserAccountCredential,
        addressValue: IUserAccountAddress,
        gasProviderValue: IUserAccountProvider,
        khimvoloknoProviderValue: IUserAccountProvider,
        vodokanalProviderValue: IUserAccountProvider,
        oblenergoProviderValue: IUserAccountProvider
    ): Observable<object> {
        return this.http.post<IUserAccountAddress>( environment.apiUrl + '0301314c-e771-4d60-8244-91b1655e76d9', {
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
        })
    }
}
