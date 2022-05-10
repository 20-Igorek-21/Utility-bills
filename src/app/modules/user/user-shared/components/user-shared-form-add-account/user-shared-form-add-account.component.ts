import { Component, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserSharedDataUserAccountService } from '../../services';
import { FormGroup } from '@angular/forms';
import { UserSharedFormPersonalDataComponent } from '../user-shared-form-personal-data/user-shared-form-personal-data.component';
import { UserSharedFormAddressComponent } from '../user-shared-form-address/user-shared-form-address.component';
import { UserSharedFormProvidersComponent } from '../user-shared-form-providers/user-shared-form-providers.component';
import { UserSharedFloatingAlertComponent } from '../user-shared-floating-alert/user-shared-floating-alert.component';

@Component({
    selector: 'app-user-shared-form-add-account',
    templateUrl: './user-shared-form-add-account.component.html',
    styleUrls: ['./user-shared-form-add-account.component.css']
})
export class UserSharedFormAddAccountComponent implements OnDestroy {

    private subscription: Subscription = new Subscription()

    @ViewChild('formPersonalData')
    public formPersonalData!: UserSharedFormPersonalDataComponent;
    @ViewChild('formAddress')
    public formAddress!: UserSharedFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: UserSharedFormProvidersComponent;
    @ViewChild('openAlert')
    public openAlert!: UserSharedFloatingAlertComponent;

    @Output() isCloseFormAccount = new EventEmitter;
    @Output() fetchData = new EventEmitter;

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
        this.subscription.add(this.userSharedDataAccountService.createAccount(
            this.formPersonalData.personalDataForm.value,
            this.formAddress.addressForm.value,
            this.formProviders.providersForm.value
        ).subscribe( () => {
            this.fetchData.emit();
            alert('рахунок доданий')
        },
        error => {
            console.log(error);
        }
        ))
        this.resetForm();
    }
}
