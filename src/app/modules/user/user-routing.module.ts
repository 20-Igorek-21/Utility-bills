import { Routes } from '@angular/router';
import { IndicatorsCardsPageViewComponent } from './indicators/components';
import { UserProfileFormPageViewComponent } from './user-profile/components';
import { UserPersonalCabinetFormEditorPageViewComponent } from './user-personal-cabinet/components';

export const userRoutes: Routes = [
    {
        path: 'personal-cabinet',
        component: UserPersonalCabinetFormEditorPageViewComponent
    },
    {
        path: 'indicators',
        component: IndicatorsCardsPageViewComponent
    },
    {
        path: 'profile',
        component: UserProfileFormPageViewComponent
    }
]
