import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthInterceptor = class AuthInterceptor {
    constructor(authSharedUserService) {
        this.authSharedUserService = authSharedUserService;
    }
    intercept(request, next) {
        const author = request.clone({
            headers: request.headers.set('Authorization', this.authSharedUserService.getToken())
        });
        return next.handle(author);
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map