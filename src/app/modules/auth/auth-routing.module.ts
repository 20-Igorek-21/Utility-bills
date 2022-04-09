import { Routes } from '@angular/router';
import { AuthLoginFormPageViewComponent } from './auth-login/components';

export const authRoutes: Routes = [
    {
        path: 'login',
        component: AuthLoginFormPageViewComponent
    }
]
