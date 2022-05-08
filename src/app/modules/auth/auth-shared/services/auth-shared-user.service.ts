import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IUserAuth } from '../../../core/form/types/auth-shared-user-interface';
import { FormGroup } from '@angular/forms';
import { AuthInterceptor } from '../interceptor/auth.interceptor';

@Injectable({
    providedIn: 'root'
})
export class AuthSharedUserService {

    constructor(private http: HttpClient) { }

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
            .pipe( tap( ({token}) => {
                // localStorage.setItem('auth', token);
                AuthInterceptor.accessToken = token;
            }))
    }

    public refreshToken(): Observable<{ token: string }> {
        return this.http.get<{ token: string }>(environment.apiUrl + 'refresh/')
            .pipe( tap( ({token}) => {
                AuthInterceptor.accessToken = token;
            }));
    }

    public logOut() {
        localStorage.clear();
        AuthInterceptor.accessToken = '';
    }
}
