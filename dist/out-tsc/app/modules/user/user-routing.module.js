import { UserIndicatorsCardsPageViewComponent } from './user-indicators/components';
import { UserProfileFormPageViewComponent } from './user-profile/components';
import { UserPersonalCabinetFormEditorPageViewComponent } from './user-personal-cabinet/components';
export const userRoutes = [
    {
        path: 'indicators',
        component: UserIndicatorsCardsPageViewComponent
    },
    {
        path: 'personal-cabinet',
        component: UserPersonalCabinetFormEditorPageViewComponent
    },
    {
        path: 'profile',
        component: UserProfileFormPageViewComponent
    }
];
//# sourceMappingURL=user-routing.module.js.map