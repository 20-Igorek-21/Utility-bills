import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';
import {finalize, Subscription} from 'rxjs';
import {IUserAccountData} from '../../../user-shared/types/user-shared-account.interface';
import {UserSharedFloatingAlertComponent} from "../../../user-shared/components";

@Component({
    selector: 'app-user-indicators-cards-page',
    templateUrl: './user-indicators-cards-page.component.html',
    styleUrls: ['./user-indicators-cards-page.component.css']
})
export class UserIndicatorsCardsPageComponent implements OnInit, OnDestroy {

    public isShowFormAddAccount = true;
    public accountData: IUserAccountData[] = [];
    public isLoader = true;
    private subscription: Subscription = new Subscription();
    @ViewChild('openAlert')
    public openAlert!: UserSharedFloatingAlertComponent;
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
                    this.onShowFormAddAccount()
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

    public onShowFormAddAccount(): void {
        this.isShowFormAddAccount = false;
        this.isLockEditorForm.emit(false);
    }

    public isCloseFormAccount(): void {
        this.isShowFormAddAccount = true;
        this.isUnLockEditorForm.emit(true);
    }
}
