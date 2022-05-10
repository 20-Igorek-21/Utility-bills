import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';
import {finalize, Subscription} from 'rxjs';
import {IUserAccountData} from '../../../user-shared/types/user-shared-account.interface';

@Component({
    selector: 'app-user-indicators-cards-page',
    templateUrl: './user-indicators-cards-page.component.html',
    styleUrls: ['./user-indicators-cards-page.component.css']
})
export class UserIndicatorsCardsPageComponent implements OnInit, OnDestroy {

    public isShowFormAccount = true;
    public accountData: IUserAccountData[] = [];
    public isLoader = true;
    private subscription: Subscription = new Subscription();

    @Output() isLockEditorForm = new EventEmitter();
    @Output() isUnLockEditorForm = new EventEmitter();

    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnInit() {
        this.fetchData()
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    fetchData(): void {
        this.subscription.add(this.userSharedDataAccountService.fetchAccount()
            .pipe( finalize( () => {
                this.isLoader = false;
            }))
            .subscribe( (data: IUserAccountData[]) => {
                this.accountData = data;

                if (data.length === 0) {
                    localStorage.removeItem('card');
                    this.onShowFormAccount()
                }
                else {
                    if (data[0].id){
                        localStorage.setItem('card', data[0].id)
                    }
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
