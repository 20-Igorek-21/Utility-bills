import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {IUserAccountData} from '../../../user-shared/types/user-shared-account.interface';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';

@Component({
    selector: 'app-user-personal-cabinet-account',
    templateUrl: './user-personal-cabinet-account.component.html',
    styleUrls: ['./user-personal-cabinet-account.component.css']
})
export class UserPersonalCabinetAccountComponent implements OnInit, OnDestroy {

    public flat?: number | null;
    subscription: Subscription = new Subscription()

    @Input() card!: IUserAccountData;
    @Output() deleteCard = new EventEmitter;
    @Output() changeCard = new EventEmitter
    @Output() changeMessageTrue = new EventEmitter


    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnInit() {
        if (this.card.id) {
            localStorage.setItem('card',this.card.id);
        }

        // if (this.card.addresses?.flat === null) {
        //     this.flat = null
        // } else {
        //     this.flat = this.card.addresses?.flat
        // }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    public onEditCard(id: string): void {
        this.changeCard.emit();
    }

    public onDeleteCard(id: string) {

        this.subscription.add(this.userSharedDataAccountService.deleteAccount(id)
            .subscribe( () => {
                this.deleteCard.emit()
            },
            error => {
                console.log(error)
            }))
    }

    onSelect(id:string) {
        localStorage.setItem('card',this.card.id)
    }
}
