import { Routes } from '@angular/router';
import { PersonalCabinetFormEditorPageViewComponent } from './personal-cabinet/components';
import { IndicatorsCardsPageViewComponent } from './indicators/components';
import { UserProfileFormPageViewComponent } from './user-profile/components';

export const userRoutes: Routes = [
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
]
