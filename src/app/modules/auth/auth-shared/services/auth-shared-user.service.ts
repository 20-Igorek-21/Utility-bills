import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IUserAuth } from '../types/auth-shared-user-interface';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class AuthSharedUserService {

    private token = '';

    constructor(private readonly http: HttpClient) { }

    public registerUser(registerValue: FormGroup): Observable<IUserAuth> {
        return this.http.post<IUserAuth>(environment.apiUrl, {
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
        return this.http.post<{ token: string }>(environment.apiUrl, {
            name: loginValue.value.email,
            password: loginValue.value.password
        })
    }

    setToken(token: string): void {
        this.token = token;
    }

    getToken(): string {
        return this.token
    }

}
