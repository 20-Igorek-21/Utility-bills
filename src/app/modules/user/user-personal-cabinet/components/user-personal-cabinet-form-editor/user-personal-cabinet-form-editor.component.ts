import {Component, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserSharedCreateAccountService} from '../../../user-shared/services';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {
    UserPersonalCabinetFormCredentialsComponent
} from '../user-personal-cabinet-form-credentials/user-personal-cabinet-form-credentials.component';
import {
    UserPersonalCabinetFormAddressComponent
} from '../user-personal-cabinet-form-address/user-personal-cabinet-form-address.component';
import {
    UserPersonalCabinetFormProvidersComponent
} from '../user-personal-cabinet-form-providers/user-personal-cabinet-form-providers.component';

@Component({
    selector: 'app-user-personal-cabinet-form-editor',
    templateUrl: './user-personal-cabinet-form-editor.component.html',
    styleUrls: ['./user-personal-cabinet-form-editor.component.css']
})
export class UserPersonalCabinetFormEditorComponent implements OnDestroy {

    private subscription: Subscription = new Subscription()

    @ViewChild('formCredentials')
    public formCredentials!: UserPersonalCabinetFormCredentialsComponent;
    @ViewChild('formAddress')
    public formAddress!: UserPersonalCabinetFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: UserPersonalCabinetFormProvidersComponent;

    @Output() isCloseEditorForm = new EventEmitter;
    @Output() fetchData = new EventEmitter;

    constructor(
        private readonly userSharedCreatAccountService: UserSharedCreateAccountService,
        private readonly router: Router) {}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    plugForm: FormGroup = new FormGroup({});

    onCloseWindow(): void {
        this.resetForm()
    }

    resetForm() {
        this.isCloseEditorForm.emit();
        this.formCredentials.credentialsForm.reset();
        this.formAddress.addressForm.reset();
        this.formProviders.gasProviderForm.reset();
        this.formProviders.khimvoloknoProviderForm.reset();
        this.formProviders.vodokanalProviderForm.reset();
        this.formProviders.oblenergoProviderForm.reset();
    }

    onSubmit(): void {
        this.subscription.add(this.userSharedCreatAccountService.createAccount(
            this.formCredentials.credentialsForm.value,
            this.formAddress.addressForm.value,
            this.formProviders.gasProviderForm.value,
            this.formProviders.khimvoloknoProviderForm.value,
            this.formProviders.vodokanalProviderForm.value,
            this.formProviders.oblenergoProviderForm.value
        ).subscribe( () => {
            this.fetchData.emit()
            this.router.navigateByUrl('user/indicators')
        }))
        this.resetForm()
    }

}
