import { AuthLoginFormPageViewComponent } from './auth-login/components';
import { AuthRegisterFormPageViewComponent } from './auth-register/components';
import { AuthResetPasswordFormPageViewComponent } from './auth-reset-password/components';
export const authRoutes = [
    {
        path: 'login',
        component: AuthLoginFormPageViewComponent,
    },
    {
        path: 'register',
        component: AuthRegisterFormPageViewComponent
    },
    {
        path: 'reset-password',
        component: AuthResetPasswordFormPageViewComponent
    }
];
//# sourceMappingURL=auth-routing.module.js.map