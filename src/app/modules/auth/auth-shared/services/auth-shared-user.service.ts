import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {ILoginResponse, IUserAuth} from '../../../core/form/types/auth-shared-user-interface';
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

    public loginUser(loginValue: FormGroup): Observable<ILoginResponse> {
        return this.http.post<ILoginResponse>(environment.apiUrl + 'login/' , {
            email: loginValue.value.email,
            password: loginValue.value.password
        }, {
            withCredentials: false
        })
            .pipe( tap( ({token}) => {
                console.log('token service')
                localStorage.setItem('auth', token);
                AuthInterceptor.accessToken = token;
            }))
    }

    public refreshToken(): Observable<{ token: string }> {
        return this.http.get<{ token: string }>(environment.apiUrl + 'refresh/', {
            withCredentials: true
        })
            .pipe( tap( ({token}) => {
                AuthInterceptor.accessToken = token;
            }));
    }

    public isLogged(): boolean {
        return !!localStorage.getItem('auth');
    }

    public logOut() {
        localStorage.clear();
        AuthInterceptor.accessToken = '';
    }
}
