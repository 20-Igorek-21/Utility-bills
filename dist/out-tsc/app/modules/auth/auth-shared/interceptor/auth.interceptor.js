var AuthInterceptor_1;
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
let AuthInterceptor = AuthInterceptor_1 = class AuthInterceptor {
    constructor(authSharedUserService) {
        this.authSharedUserService = authSharedUserService;
        this.refresh = false;
    }
    intercept(req, next) {
        const request = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + AuthInterceptor_1.accessToken)
        });
        return next.handle(request).pipe(catchError((err) => {
            if (err.status === 401 && !this.refresh) {
                this.refresh = true;
                this.authSharedUserService.refreshToken()
                    .subscribe(({ token }) => {
                    console.log('refresh good');
                    console.log(token);
                }, error => {
                    console.log(error);
                });
                return next.handle(request.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + AuthInterceptor_1.accessToken)
                }));
            }
            this.refresh = false;
            return throwError(() => err);
        }));
    }
};
AuthInterceptor.accessToken = '';
AuthInterceptor = AuthInterceptor_1 = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map