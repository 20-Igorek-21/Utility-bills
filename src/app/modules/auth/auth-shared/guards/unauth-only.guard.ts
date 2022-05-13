import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthSharedUserService} from '../services';

@Injectable({
    providedIn: 'root'
})
export class UnauthOnlyGuard implements CanActivate {

    constructor(private readonly authSharedUserService: AuthSharedUserService, private readonly router: Router) {
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLogged = this.authSharedUserService.isLogged();
        if (!isLogged) return true
        return this.router.navigateByUrl('auth/');
    }

    canLoad(router: Router, segment: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLogged = this.authSharedUserService.isLogged();
        if (!isLogged) return true
        return this.router.navigateByUrl('auth/');
    }

}
