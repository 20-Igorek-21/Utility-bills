import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {IUserAccount} from '../../../user-shared/types/user-shared-account.interface';
import {finalize, Subscription} from 'rxjs';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';

@Component({
    selector: 'app-user-indicators-section-accounts',
    templateUrl: './user-indicators-section-accounts.component.html',
    styleUrls: ['./user-indicators-section-accounts.component.css']
})
export class UserIndicatorsSectionAccountsComponent implements OnDestroy {

    public massageText = true;
    public isShowEditorForm = true;
    public isLoader = true;
    public cards: IUserAccount []= []
    private subscription: Subscription = new Subscription()

    @Output() isLockEditorForm = new EventEmitter()
    @Output() isUnLockEditorForm = new EventEmitter()

    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {
        this.fetchData();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    fetchData(): void {
        this.subscription.add(this.userSharedDataAccountService.fetchAccount()
            .pipe( finalize( () => {
                this.isLoader = false;
            }))
            .subscribe( (data: IUserAccount[]) => {
                console.log(data)
                this.cards = data
                // if (this.cards.length === 0) {
                //     localStorage.removeItem('card');
                //     this.massageText = false;
                // }
                // else {
                //     this.massageText = true;
                // }

            },
            error => {
                console.log(error);
            }))

    }

    public onShowEditorForm(): void {
        this.isShowEditorForm = false;
        this.isLockEditorForm.emit(false);
    }

    public isCloseEditorForm(): void {
        this.isShowEditorForm = true;
        this.isUnLockEditorForm.emit(true);
    }




}
