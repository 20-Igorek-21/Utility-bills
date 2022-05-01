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

    public editCard(id: string): void {
        // this.userSharedDataAccountService.changeAccount()
    }

    public deleteCard(id: string) {
        console.log(id)
        this.subscription.add(this.userSharedDataAccountService.deleteAccount(id)
            .subscribe( (res) => {
                console.log(res)
            },
            error => {
                console.log(error)
            }))
    }

    onSelect(id:string) {
        console.log(id)

    }
}
