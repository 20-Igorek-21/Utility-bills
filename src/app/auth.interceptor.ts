import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthSharedUserService} from './modules/auth/auth-shared/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    static accessToken = '';


    constructor(private authSharedUserService: AuthSharedUserService ) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const req = request.clone({
            setHeaders: {
                Authorization: 'Bearer' + this.authSharedUserService.getToken()
            }
        })
        return next.handle(req);
    }
}
