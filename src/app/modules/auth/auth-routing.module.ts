import { Routes } from '@angular/router';
import { AuthLoginFormPageViewComponent } from './auth-login/components';
import { AuthRegisterFormPageViewComponent } from './auth-register/components';

export const authRoutes: Routes = [
    {
        path: 'login',
        component: AuthLoginFormPageViewComponent
    },
    {
        path: 'register',
        component: AuthRegisterFormPageViewComponent
    }
]
