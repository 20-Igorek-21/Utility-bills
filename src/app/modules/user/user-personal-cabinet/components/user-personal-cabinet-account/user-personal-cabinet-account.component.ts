import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUserAccountData } from '../../../user-shared/types/user-shared-account.interface';
import { UserSharedDataUserAccountService } from '../../../user-shared/services';

@Component({
    selector: 'app-user-personal-cabinet-account',
    templateUrl: './user-personal-cabinet-account.component.html',
    styleUrls: ['./user-personal-cabinet-account.component.css']
})
export class UserPersonalCabinetAccountComponent implements OnDestroy {

    public flat?: number | null;
    subscription: Subscription = new Subscription();

    @Input() account!: IUserAccountData;
    @Output() deleteAccount = new EventEmitter;
    @Output() changeAccount = new EventEmitter;
    @Output() changeMessageTrue = new EventEmitter;

    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public onChangeAccount(): void {
        this.changeAccount.emit();
    }

    public onDeleteAccount(id: string): void {
        this.subscription.add(this.userSharedDataAccountService.deleteAccount(id)
            .subscribe( () => {
                this.deleteAccount.emit();
            },
            error => {
                console.log(error);
            }))
    }
}
