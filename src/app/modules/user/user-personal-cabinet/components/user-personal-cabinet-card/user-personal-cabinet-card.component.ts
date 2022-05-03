import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';
import { UserSharedDataUserAccountService } from '../../../user-shared/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-personal-cabinet-card',
    templateUrl: './user-personal-cabinet-card.component.html',
    styleUrls: ['./user-personal-cabinet-card.component.css']
})
export class UserPersonalCabinetCardComponent implements OnInit, OnDestroy {

    subscription: Subscription = new Subscription()

    @Input() card!: IUserAccount;
    @Output() deleteCard = new EventEmitter;
    @Output() changeCard = new EventEmitter
    @Output() changeMessageTrue = new EventEmitter
    @Output() changeMessageFalse = new EventEmitter
    constructor( private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnInit() {
        if (this.card.id) {
            localStorage.setItem('card',this.card.id)
            this.changeMessageTrue.emit(true)
        }

        else {
            console.log('not')
            localStorage.removeItem('card')
            this.changeMessageFalse.emit(false)
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    public onEditCard(id: string): void {
        this.changeCard.emit()
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
        console.log(id)
        localStorage.setItem('card',this.card.id)
    }
}
