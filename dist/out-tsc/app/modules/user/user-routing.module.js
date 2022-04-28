import { PersonalCabinetFormEditorPageViewComponent } from './personal-cabinet/components';
import { IndicatorsCardsPageViewComponent } from './indicators/components';
import { UserProfileFormPageViewComponent } from './user-profile/components';
export const userRoutes = [
    {
        path: 'personal-cabinet',
        component: PersonalCabinetFormEditorPageViewComponent
    },
    {
        path: 'indicators',
        component: IndicatorsCardsPageViewComponent
    },
    {
        path: 'profile',
        component: UserProfileFormPageViewComponent
    }
];
//# sourceMappingURL=user-routing.module.js.map