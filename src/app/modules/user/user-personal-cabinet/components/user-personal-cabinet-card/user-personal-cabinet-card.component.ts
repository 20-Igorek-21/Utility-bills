import { Component, Input } from '@angular/core';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';

@Component({
    selector: 'app-user-personal-cabinet-card',
    templateUrl: './user-personal-cabinet-card.component.html',
    styleUrls: ['./user-personal-cabinet-card.component.css']
})
export class UserPersonalCabinetCardComponent {

    @Input() card!: IUserAccount

    public editCard(): void {
        console.log('ok')
    }

    public deleteCard(): void {
        console.log('ok')
    }
}
