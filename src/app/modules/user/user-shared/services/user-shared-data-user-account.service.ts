import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    IUserAccount,
    IUserAccountAddress,
    IUserAccountCredential,
    IUserAccountProvider
} from '../types/user-shared-account.interface';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserSharedDataUserAccountService {

    constructor(private readonly http: HttpClient) {}

    createAccount(
        credentialsValue: IUserAccountCredential,
        addressValue: IUserAccountAddress,
        gasProviderValue: IUserAccountProvider,
        khimvoloknoProviderValue: IUserAccountProvider,
        vodokanalProviderValue: IUserAccountProvider,
        oblenergoProviderValue: IUserAccountProvider
    ): Observable<object> {
        return this.http.post<IUserAccountAddress>( environment.apiUrlAccounts + '09923a66-8d03-477f-b8bf-f39d4d49f2cd', {
            account: {
                fullName: credentialsValue.fullName,
                phone: credentialsValue.phone
            },
            addresses: {
                city: addressValue.city,
                street: addressValue.street,
                house: addressValue.house,
                flat: addressValue.flat
            },
            providers: [
                {
                    number: gasProviderValue.number,
                    id: gasProviderValue.id,
                    status: gasProviderValue.status
                },
                {
                    number: khimvoloknoProviderValue.number,
                    id: khimvoloknoProviderValue.id,
                    status: khimvoloknoProviderValue.status
                },
                {
                    number: vodokanalProviderValue.number,
                    id: vodokanalProviderValue.id,
                    status: vodokanalProviderValue.status
                },
                {
                    number: oblenergoProviderValue.number,
                    id: oblenergoProviderValue.id,
                    status: oblenergoProviderValue.status
                }
            ]
        })
            .pipe( map( (res: IUserAccountAddress) => res ))
    }

    changeAccount(
        credentialsValue: IUserAccountCredential,
        addressValue: IUserAccountAddress,
        gasProviderValue: IUserAccountProvider,
        khimvoloknoProviderValue: IUserAccountProvider,
        vodokanalProviderValue: IUserAccountProvider,
        oblenergoProviderValue: IUserAccountProvider
    ): Observable<object> {
        return this.http.put<IUserAccountAddress>( environment.apiUrlAccounts + '09923a66-8d03-477f-b8bf-f39d4d49f2cd', {
            account: {
                fullName: credentialsValue.fullName,
                phone: credentialsValue.phone
            },
            addresses: {
                city: addressValue.city,
                street: addressValue.street,
                house: addressValue.house,
                flat: addressValue.flat
            },
            providers: [
                {
                    number: gasProviderValue.number,
                    id: gasProviderValue.id,
                    status: gasProviderValue.status
                },
                {
                    number: khimvoloknoProviderValue.number,
                    id: khimvoloknoProviderValue.id,
                    status: khimvoloknoProviderValue.status
                },
                {
                    number: vodokanalProviderValue.number,
                    id: vodokanalProviderValue.id,
                    status: vodokanalProviderValue.status
                },
                {
                    number: oblenergoProviderValue.number,
                    id: oblenergoProviderValue.id,
                    status: oblenergoProviderValue.status
                }
            ]
        })
            .pipe( map( (res: IUserAccountAddress) => res ))
    }

    fetshAccount(): Observable<IUserAccount[]> {
        return this.http.get<IUserAccount[]>(environment.apiUrlAccounts + '09923a66-8d03-477f-b8bf-f39d4d49f2cd')
            .pipe( map((res:IUserAccount[]) => res));
    }

    deleteAccount(): Observable<void> {
        return this.http.delete<IUserAccountAddress>(environment.apiUrlAccounts + '09923a66-8d03-477f-b8bf-f39d4d49f2cd')
            .pipe( map( (res: IUserAccountAddress) => console.log(res)))
    }
}
