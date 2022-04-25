import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { PersonalCabinetFormCredentialsComponent } from '../personal-cabinet-form-credentials/personal-cabinet-form-credentials.component';
import { PersonalCabinetFormAddressComponent } from '../personal-cabinet-form-address/personal-cabinet-form-address.component';
import { PersonalCabinetFormProvidersComponent } from '../personal-cabinet-form-providers/personal-cabinet-form-providers.component';
import { PersonalCabinetService } from '../../services';

@Component({
    selector: 'app-personal-cabinet-form-editor',
    templateUrl: './personal-cabinet-form-editor.component.html',
    styleUrls: ['./personal-cabinet-form-editor.component.css']
})
export class PersonalCabinetFormEditorComponent {

    constructor(private readonly personalCabinetService: PersonalCabinetService) {}


    @ViewChild('formCredentials')
    public formCredentials!: PersonalCabinetFormCredentialsComponent;
    @ViewChild('formAddress')
    public formAddress!: PersonalCabinetFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: PersonalCabinetFormProvidersComponent;

    @Output() isCloseEditorForm = new EventEmitter;
    @Output() fetchData = new EventEmitter;


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
        this.personalCabinetService.createAccount(
            this.formCredentials.credentialsForm.value,
            this.formAddress.addressForm.value,
            this.formProviders.gasProviderForm.value,
            this.formProviders.khimvoloknoProviderForm.value,
            this.formProviders.vodokanalProviderForm.value,
            this.formProviders.oblenergoProviderForm.value
        ).subscribe( (d) => {
            this.fetchData.emit()
        })
        this.resetForm()
    }
}
