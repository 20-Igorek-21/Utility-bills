import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {environment} from '../../../../../environments/environment';
import {IUserAccount} from '../types/user-shared-account.interface';

@Injectable({
    providedIn: 'root'
})
export class UserSharedFetchAccountService {

    constructor(private readonly http: HttpClient) {}

    fetshAccount(): Observable<IUserAccount[]> {
        return this.http.get<IUserAccount[]>(environment.apiUrlTest)
            .pipe(map((res:IUserAccount[]) => res));
    }
}
