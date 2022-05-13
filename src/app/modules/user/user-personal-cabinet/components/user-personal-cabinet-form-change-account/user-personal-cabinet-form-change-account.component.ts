import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

import {Subscription} from 'rxjs';
import {
    UserSharedFloatingAlertComponent,
    UserSharedFormAddressComponent,
    UserSharedFormPersonalDataComponent,
    UserSharedFormProvidersComponent
} from '../../../user-shared/components';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';
import {FormGroup} from '@angular/forms';
import {IUserAccountData} from '../../../user-shared/types/user-shared-account.interface';

@Component({
    selector: 'app-user-personal-cabinet-form-change-account',
    templateUrl: './user-personal-cabinet-form-change-account.component.html',
    styleUrls: ['./user-personal-cabinet-form-change-account.component.css']
})
export class UserPersonalCabinetFormChangeAccountComponent implements OnInit, OnDestroy {

    private subscription: Subscription = new Subscription()
    private transferOfAccountDataForChildren = true;
    public isAccountDataCanBeChanged = false;

    @ViewChild('formPersonalData')
    public formPersonalData!: UserSharedFormPersonalDataComponent;
    @ViewChild('formAddress')
    public formAddress!: UserSharedFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: UserSharedFormProvidersComponent;

    @Output() isCloseFormAccount = new EventEmitter;
    @Output() fetchData = new EventEmitter;

    @Input() accountData: IUserAccountData [] = [];
    @Input() public openAlert!: UserSharedFloatingAlertComponent;

    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnInit() {
        this.statusCanBeChange()
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    plugForm: FormGroup = new FormGroup({});

    onCloseWindow(): void {
        this.isCloseFormAccount.emit();
    }

    changeDataAccount(): void {
        const accountId = sessionStorage.getItem('changeId')
        console.log(accountId)
        if (this.formPersonalData.personalDataForm.valid ?? this.formAddress.addressForm.valid) {
            this.subscription.add(this.userSharedDataAccountService.changeAccount(
                accountId,
                this.formPersonalData.personalDataForm.value,
                this.formAddress.addressForm.value,
                this.formProviders.providersForm.value
            ).subscribe( () => {

                this.fetchData.emit();
                this.isCloseFormAccount.emit();
                this.openAlert.massage = 'Дані змінено!'
                this.openAlert.showNotification();

            },
            error => {
                this.isCloseFormAccount.emit();
                this.openAlert.error = true;
                this.openAlert.massage = 'Помилка! Спробуйте ще раз!'
                this.openAlert.showNotification();
            }
            ))
        }
    }

    statusCanBeChange() {
        if (this.transferOfAccountDataForChildren && this.accountData.length !== 0) {
            this.isAccountDataCanBeChanged = true;
        }
    }
}
