import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    IUserAccount,
    IUserAccountAddress,
    IUserAccountData,
    IUserAccountProviders
} from '../types/user-shared-account.interface';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserSharedDataUserAccountService {

    constructor(private readonly http: HttpClient) {}

    createAccount(
        personalDataValue: IUserAccountData,
        addressValue: IUserAccountAddress,
        providersValue: IUserAccountProviders
    ): Observable<IUserAccount> {
        return this.http.post<IUserAccount>( environment.apiUrl + 'accounts/',
            {
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
                    }
                    ,
                    {
                        number: providersValue.khimvoloknoNumber,
                        id: providersValue.khimvoloknoId,
                        status: providersValue.khimvoloknoStatus,
                        counterInstalled: providersValue.khimvoloknoCounterInstalled
                    },
                    {
                        number: providersValue.vodokanalNumber,
                        id: providersValue.vodokanalId,
                        status: providersValue.vodokanalStatus
                    }
                ]
            })
            .pipe( map( (res: IUserAccount) => res ));
    }

    changeAccount(
        id: string | null,
        personalDataValue: IUserAccountData,
        addressValue: IUserAccountAddress,
        providersValue: IUserAccountProviders
    ): Observable<IUserAccount> {
        console.log(providersValue.khimvoloknoCounterInstalled)
        return this.http.put<IUserAccount>( environment.apiUrl + 'accounts/' + id, {
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
                }
                ,
                {
                    number: providersValue.khimvoloknoNumber,
                    id: providersValue.khimvoloknoId,
                    status: providersValue.khimvoloknoStatus,
                    counterInstalled: providersValue.khimvoloknoCounterInstalled
                },
                {
                    number: providersValue.vodokanalNumber,
                    id: providersValue.vodokanalId,
                    status: providersValue.vodokanalStatus
                }
            ]
        })
            .pipe( map( (res: IUserAccount) => res ));
    }

    fetchAccount(): Observable<IUserAccountData[]> {
        return this.http.get<IUserAccountData[]>(environment.apiUrl + 'accounts/')
            .pipe( map((res:IUserAccountData[]) => res));
    }

    deleteAccount(id:string): Observable<void> {
        return this.http.delete<IUserAccount>(environment.apiUrl + 'accounts/' + id)
            .pipe( map( (res: IUserAccount) => console.log(res)));
    }
}
