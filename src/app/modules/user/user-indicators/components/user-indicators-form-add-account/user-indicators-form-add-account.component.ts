import {Component, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {
    UserIndicatorsFormPersonalDataComponent
} from '../user-indicators-form-personal-data/user-indicators-form-personal-data.component';
import {
    UserIndicatorsFormAddressComponent
} from '../user-indicators-form-address/user-indicators-form-address.component';
import {
    UserIndicatorsFormProvidersComponent
} from '../user-indicators-form-providers/user-indicators-form-providers.component';
import {UserSharedDataUserAccountService} from '../../../user-shared/services';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-user-indicators-form-add-account',
    templateUrl: './user-indicators-form-add-account.component.html',
    styleUrls: ['./user-indicators-form-add-account.component.css']
})
export class UserIndicatorsFormAddAccountComponent implements OnDestroy {

    private subscription: Subscription = new Subscription()

    @ViewChild('formPersonalData')
    public formPersonalData!: UserIndicatorsFormPersonalDataComponent;
    @ViewChild('formAddress')
    public formAddress!: UserIndicatorsFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: UserIndicatorsFormProvidersComponent;

    @Output() isCloseEditorForm = new EventEmitter;
    @Output() fetchData = new EventEmitter;

    constructor(
        private readonly userSharedDataAccountService: UserSharedDataUserAccountService,
        private readonly router: Router) {}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    plugForm: FormGroup = new FormGroup({});

    onCloseWindow(): void {
        this.resetForm()
    }

    resetForm(): void {
        this.isCloseEditorForm.emit();
        this.formPersonalData.personalDataForm.reset();
        this.formAddress.addressForm.reset();
        this.formProviders.gasProviderForm.reset();
        this.formProviders.khimvoloknoProviderForm.reset();
        this.formProviders.vodokanalProviderForm.reset();
        this.formProviders.oblenergoProviderForm.reset();
    }

    onSubmit(): void {
        this.subscription.add(this.userSharedDataAccountService.createAccount(
            this.formPersonalData.personalDataForm.value,
            this.formAddress.addressForm.value,
            this.formProviders.gasProviderForm.value,
            this.formProviders.khimvoloknoProviderForm.value,
            this.formProviders.vodokanalProviderForm.value,
            this.formProviders.oblenergoProviderForm.value
        ).subscribe( (res:object) => {
            console.log(res)
            this.fetchData.emit()
        },
        error => {
            console.log(error)
        }
        ))
        this.resetForm()
    }

}
