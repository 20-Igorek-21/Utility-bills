import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { FormGroup } from '@angular/forms';
import { IUserAuth } from '../../../core/form/types/auth-shared-user-interface';

@Injectable({
    providedIn: 'root'
})
export class UserSharedChangeDataUserService {

    constructor(private readonly http: HttpClient) { }

    changeDataUser(id:string, profileValue: FormGroup): Observable<IUserAuth> {
        return this.http.put<IUserAuth>(environment.apiUrl + id, {
            email: profileValue.value.email,
            password: profileValue.value.password
        })
    }
}
