import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import {AuthSharedUserService} from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    static accessToken = '';
    private refresh = false;

    constructor(private authSharedUserService: AuthSharedUserService) {}

    intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
        const request = req.clone( {
            headers: req.headers.set('Authorization', 'Bearer ' + AuthInterceptor.accessToken)
        });
        return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
            if (err.status === 401 && !this.refresh) {
                this.refresh = true;
                this.authSharedUserService.refreshToken()
                    .subscribe( ({token}) => {
                        console.log('refresh good')
                        AuthInterceptor.accessToken = token;
                    },
                    error => {
                        console.log(error)
                    })
                return next.handle(request.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + AuthInterceptor.accessToken)
                }));
            }
            this.refresh = false;
            return throwError(() => err);
        }));
    }
}
