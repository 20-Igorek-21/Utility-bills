import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { IUserAccountData} from '../../../user-shared/types/user-shared-account.interface';
import { finalize, Subscription } from 'rxjs';
import { UserSharedDataUserAccountService } from '../../../user-shared/services';
import {UserSharedFloatingAlertComponent} from "../../../user-shared/components";

@Component({
    selector: 'app-user-personal-cabinet-form-editor-page',
    templateUrl: './user-personal-cabinet-form-editor-page.component.html',
    styleUrls: ['./user-personal-cabinet-form-editor-page.component.css']
})
export class UserPersonalCabinetFormEditorPageComponent implements OnInit, OnDestroy {

    public massageText = false;
    public isExpandDataAccount = false;
    public isExpandPrivateData = false;
    public iconNameExpendAccount = 'more';
    public iconNameExpendPrivateData = 'more';
    public isShowFormAccount = true;
    public isLoader = true;
    public accountData: IUserAccountData []= [];
    private subscription: Subscription = new Subscription()
    @ViewChild('openAlert')
    public openAlert!: UserSharedFloatingAlertComponent;
    @Output() isLockEditorForm = new EventEmitter()
    @Output() isUnLockEditorForm = new EventEmitter()

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
                this.isLoader = false;
            }))
            .subscribe( (data: IUserAccountData[]) => {
                this.accountData = data
                console.log(data)
                if (this.accountData.length === 0) {
                    localStorage.removeItem('card');
                    this.massageText = false;
                }
                else {
                    this.massageText = true;
                }
            },
            error => {
                console.log(error);
            }))

    }

    public onShowEditorForm(): void {
        this.isShowFormAccount = false;
        this.isLockEditorForm.emit(false);
    }

    public isCloseFormAccount(): void {
        this.isShowFormAccount = true;
        this.isUnLockEditorForm.emit(true);
    }

    public onExpandDataAccount(): void {
        this.isExpandDataAccount = !this.isExpandDataAccount;
        this.iconNameExpendAccount = this.iconNameExpendAccount == 'more' ? 'few' : 'more';
    }

    public onExpandPrivateData(): void {
        this.isExpandPrivateData = !this.isExpandPrivateData;
        this.iconNameExpendPrivateData = this.iconNameExpendPrivateData == 'more' ? 'few' : 'more'
    }

    public  changeAccount(id: string) {
        console.log('edit')
        this.isShowFormAccount = true;
    }
}
