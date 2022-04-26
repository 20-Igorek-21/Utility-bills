import {Component, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { PersonalCabinetFormCredentialsComponent } from '../personal-cabinet-form-credentials/personal-cabinet-form-credentials.component';
import { PersonalCabinetFormAddressComponent } from '../personal-cabinet-form-address/personal-cabinet-form-address.component';
import { PersonalCabinetFormProvidersComponent } from '../personal-cabinet-form-providers/personal-cabinet-form-providers.component';

import { UserSharedCreateAccountService } from '../../../user-shared/services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-personal-cabinet-form-editor',
    templateUrl: './personal-cabinet-form-editor.component.html',
    styleUrls: ['./personal-cabinet-form-editor.component.css']
})
export class PersonalCabinetFormEditorComponent implements OnDestroy{

    private subscription: Subscription = new Subscription()

    @ViewChild('formCredentials')
    public formCredentials!: PersonalCabinetFormCredentialsComponent;
    @ViewChild('formAddress')
    public formAddress!: PersonalCabinetFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: PersonalCabinetFormProvidersComponent;

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
