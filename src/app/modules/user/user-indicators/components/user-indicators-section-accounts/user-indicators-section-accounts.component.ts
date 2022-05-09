import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { IUserAccountData} from '../../../user-shared/types/user-shared-account.interface';
import {finalize, Subscription} from 'rxjs';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';

@Component({
    selector: 'app-user-indicators-section-accounts',
    templateUrl: './user-indicators-section-accounts.component.html',
    styleUrls: ['./user-indicators-section-accounts.component.css']
})
export class UserIndicatorsSectionAccountsComponent implements OnInit, OnDestroy {

    public isShowFormAccount = true;
    public cards: IUserAccountData []= []
    private subscription: Subscription = new Subscription()

    @Output() isLockEditorForm = new EventEmitter();
    @Output() isUnLockEditorForm = new EventEmitter();
    @Output() isLoader = new EventEmitter();

    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnInit() {
        this.fetchData();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    fetchData(): void {
        this.subscription.add(this.userSharedDataAccountService.fetchAccount()
            .pipe( finalize( () => {
                this.isLoader.emit(false);
            }))
            .subscribe( (data: IUserAccountData[]) => {
                console.log(data)
                this.cards = data
                if (this.cards.length === 0) {
                    localStorage.removeItem('card');
                    this.onShowFormAccount()
                }
            },
            error => {
                console.log(error);
            }))
    }

    public onShowFormAccount(): void {
        this.isShowFormAccount = false;
        this.isLockEditorForm.emit(false);
    }

    public isCloseFormAccount(): void {
        this.isShowFormAccount = true;
        this.isUnLockEditorForm.emit(true);
    }
}
