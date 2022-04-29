import {Component, Input, OnDestroy} from '@angular/core';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';
import { UserSharedDataUserAccountService } from '../../../user-shared/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-personal-cabinet-card',
    templateUrl: './user-personal-cabinet-card.component.html',
    styleUrls: ['./user-personal-cabinet-card.component.css']
})
export class UserPersonalCabinetCardComponent implements OnDestroy {

    subscription: Subscription = new Subscription()

    @Input() card!: IUserAccount

    constructor( private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    public editCard(): void {
        // this.userSharedDataAccountService.changeAccount()
    }

    public deleteCard() {
        this.subscription.add(this.userSharedDataAccountService.deleteAccount()
            .subscribe( (res) => {
                console.log(res)
            },
            error => {
                console.log(error)
            }))
    }
}
