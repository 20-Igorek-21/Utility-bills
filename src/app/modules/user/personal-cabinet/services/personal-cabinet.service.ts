import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {
    IUserAccount,
    IUserAccountAddress,
    IUserAccountCredential,
    IUserAccountProvider
} from '../types/user-account.interface';


@Injectable({
    providedIn: 'root'
})
export class PersonalCabinetService {

    URL = 'http://localhost:3000/accounts'

    constructor(private readonly http: HttpClient) {

    }

    createAccount(
        credentialsValue: IUserAccountCredential,
        addressValue: IUserAccountAddress,
        gasProviderValue: IUserAccountProvider,
        khimvoloknoProviderValue: IUserAccountProvider,
        vodokanalProviderValue: IUserAccountProvider,
        oblenergoProviderValue: IUserAccountProvider
    ): Observable<object> {
        return this.http.post<IUserAccountAddress>(this.URL, {
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

    fetshAccount(): Observable<any> {
        return this.http.get<IUserAccount>(this.URL)
            .pipe(map((res:IUserAccount) => res));
    }
}
