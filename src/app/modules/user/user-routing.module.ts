import { Routes } from '@angular/router';
import { PersonalCabinetFormEditorPageViewComponent } from './personal-cabinet/components';
import {IndicatorsCardsPageViewComponent} from "./indicators/components";

export const userRoutes: Routes = [
    {
        path: 'personal-cabinet',
        component: PersonalCabinetFormEditorPageViewComponent
    },
    {
        path: 'indicators',
        component: IndicatorsCardsPageViewComponent
    }
]
