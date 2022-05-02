import { Routes } from '@angular/router';
import { UserIndicatorsCardsPageViewComponent } from './user-indicators/components';
import { UserProfileFormPageViewComponent } from './user-profile/components';
import { UserPersonalCabinetFormEditorPageViewComponent } from './user-personal-cabinet/components';

export const userRoutes: Routes = [
    {
        path: 'personal-cabinet',
        component: UserPersonalCabinetFormEditorPageViewComponent
    },
    {
        path: 'indicators',
        component: UserIndicatorsCardsPageViewComponent
    },
    {
        path: 'profile',
        component: UserProfileFormPageViewComponent
    }
]
