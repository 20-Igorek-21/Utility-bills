import {Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {
    UserSharedFloatingAlertComponent,
    UserSharedFormAddressComponent,
    UserSharedFormPersonalDataComponent,
    UserSharedFormProvidersComponent
} from '../../../user-shared/components';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-user-personal-cabinet-form-change-account',
    templateUrl: './user-personal-cabinet-form-change-account.component.html',
    styleUrls: ['./user-personal-cabinet-form-change-account.component.css']
})
export class UserPersonalCabinetFormChangeAccountComponent implements OnDestroy {

    private subscription: Subscription = new Subscription()

    @ViewChild('formPersonalData')
    public formPersonalData!: UserSharedFormPersonalDataComponent;
    @ViewChild('formAddress')
    public formAddress!: UserSharedFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: UserSharedFormProvidersComponent;

    @Output() isCloseFormAccount = new EventEmitter;
    @Output() fetchData = new EventEmitter;
    @Input() public openAlert!: UserSharedFloatingAlertComponent;
    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    plugForm: FormGroup = new FormGroup({});

    onCloseWindow(): void {
        this.resetForm();
    }

    resetForm(): void {
        this.formPersonalData.personalDataForm.reset();
        this.formAddress.addressForm.reset();
        this.formProviders.providersForm.reset();
        this.isCloseFormAccount.emit();
    }

    addDataAccount(): void {
        if (this.formPersonalData.personalDataForm.valid ?? this.formAddress.addressForm.valid) {
            this.subscription.add(this.userSharedDataAccountService.createAccount(
                this.formPersonalData.personalDataForm.value,
                this.formAddress.addressForm.value,
                this.formProviders.providersForm.value
            ).subscribe( () => {
                this.openAlert.massage = 'Акаунт додано!'
                this.openAlert.showNotification();
                this.resetForm();
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
}
