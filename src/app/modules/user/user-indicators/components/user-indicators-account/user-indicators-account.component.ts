import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';
import {Subscription} from 'rxjs';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';

@Component({
    selector: 'app-user-indicators-account',
    templateUrl: './user-indicators-account.component.html',
    styleUrls: ['./user-indicators-account.component.css']
})
export class UserIndicatorsAccountComponent implements OnInit, OnDestroy {

    public flatText = '';
    public iconNameExpend = 'more';
    public isShowExpand = true;
    public subscription: Subscription = new Subscription();

    @Input() card!: IUserAccount;

    @Output() deleteAccount = new EventEmitter;
    @Output() editAccount = new EventEmitter;

    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnInit() {

        if (this.card.id) {
            localStorage.setItem('card',this.card.id);
        }

        if (this.card.address.flat === null) {
            this.flatText = '';
        } else {
            this.flatText = ', кв.';
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    public onShowExpand(): void {
        this.isShowExpand = !this.isShowExpand;
        this.iconNameExpend = this.iconNameExpend == 'more' ? 'few' : 'more';
    }

    public onEditAccount(id: string): void {
        this.editAccount.emit(id);
    }

    public onDeleteAccount(id: string): void {
        this.subscription.add(this.userSharedDataAccountService.deleteAccount(id)
            .subscribe( () => {
                this.deleteAccount.emit();
            },
            error => {
                console.log(error);
            }));
    }

    public onSelect(id: string): void {
        localStorage.setItem('card',id);
    }
}
