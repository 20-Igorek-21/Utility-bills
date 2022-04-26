import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthSharedUserService} from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private readonly authSharedUserService: AuthSharedUserService) {}

    intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
        const author = request.clone({
            headers: request.headers.set('Authorization', this.authSharedUserService.getToken())
        });
        return next.handle(author);
    }
}
