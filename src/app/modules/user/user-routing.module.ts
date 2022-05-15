import { Routes } from '@angular/router';
import { UserIndicatorsCardsPageViewComponent } from './user-indicators/components';
import { UserPersonalCabinetFormEditorPageViewComponent } from './user-personal-cabinet/components';

export const userRoutes: Routes = [
    {
        path: 'indicators',
        component: UserIndicatorsCardsPageViewComponent
    },
    {
        path: 'personal-cabinet',
        component: UserPersonalCabinetFormEditorPageViewComponent
    },
]
