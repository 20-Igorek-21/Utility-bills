import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IUserAuth } from '../../../core/form/types/auth-shared-user-interface';
import { FormGroup } from '@angular/forms';
import {AuthInterceptor} from "../../../../auth.interceptor";


@Injectable({
    providedIn: 'root'
})
export class AuthSharedUserService {

    private token = '';

    constructor(private readonly http: HttpClient) { }

    public registerUser(registerValue: FormGroup): Observable<IUserAuth> {
        return this.http.post<IUserAuth>(environment.apiUrl + 'register/', {
            email: registerValue.value.email,
            password: registerValue.value.password,
        })
    }

    public resetPassword(resetPasswordValue: FormGroup): Observable<string> {
        return this.http.post<string>(environment.apiUrl, {
            email: resetPasswordValue.value.email
        })
    }

    public loginUser(loginValue: FormGroup): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(environment.apiUrl + 'login/' , {
            email: loginValue.value.email,
            password: loginValue.value.password
        })
            .pipe( tap( (token) => {
                console.log(token)

                localStorage.setItem('auth', token.token)
                this.setToken(token.token)
            }))
    }

    setToken(token: string): void {
        this.token = token;
    }

    getToken(): string {
        return this.token
    }

}
