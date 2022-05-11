import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { IUserAuth } from '../../../core/form/types/auth-shared-user-interface';
import { environment } from '../../../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class UserSharedDataUserService {

    constructor(private readonly http: HttpClient) { }

    changeDataUser( profileValue: FormGroup ): Observable<IUserAuth> {
        return this.http.put<IUserAuth>(environment.apiUrl + 'users/', {
            email: profileValue.value.email,
            password: profileValue.value.password
        })
    }

    fetchDataUser(): Observable<IUserAuth> {
        return this.http.get<IUserAuth>(environment.apiUrl + 'users/')
            .pipe(map((res:IUserAuth) => res));
    }
}
