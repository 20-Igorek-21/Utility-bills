import { Component, Input } from '@angular/core';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';


@Component({
    selector: 'app-personal-cabinet-card',
    templateUrl: './personal-cabinet-card.component.html',
    styleUrls: ['./personal-cabinet-card.component.css']
})
export class PersonalCabinetCardComponent {

    @Input() card!: IUserAccount

    public editCard(): void {
        console.log('ok')
    }

    public deleteCard(): void {
        console.log('ok')
    }

}
