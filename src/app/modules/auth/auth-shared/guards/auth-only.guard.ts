import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSharedUserService } from '../services';

@Injectable({
    providedIn: 'root'
})
export class AuthOnlyGuard implements CanActivate {

    constructor(private readonly authSharedUserService: AuthSharedUserService, private readonly router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLogged =this.authSharedUserService.isLogged()
        if (isLogged) return true;
        else {
            this.router.navigateByUrl('/')
            return false;
        }
    }

    canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isLogged =this.authSharedUserService.isLogged()
        if (isLogged) return true;
        else {
            this.router.navigateByUrl('/')
            return false;
        }
    }
}
