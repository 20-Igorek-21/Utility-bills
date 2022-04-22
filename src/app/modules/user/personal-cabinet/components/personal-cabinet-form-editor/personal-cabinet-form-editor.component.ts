import { Component, ViewChild } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { PersonalCabinetFormCredentialsComponent } from '../personal-cabinet-form-credentials/personal-cabinet-form-credentials.component';
import { PersonalCabinetFormAddressComponent } from '../personal-cabinet-form-address/personal-cabinet-form-address.component';
import { PersonalCabinetFormProvidersComponent } from '../personal-cabinet-form-providers/personal-cabinet-form-providers.component';

@Component({
    selector: 'app-personal-cabinet-form-editor',
    templateUrl: './personal-cabinet-form-editor.component.html',
    styleUrls: ['./personal-cabinet-form-editor.component.css']
})
export class PersonalCabinetFormEditorComponent {

    isLinear = false;

    @ViewChild('formCredentials')
    public formCredentials!: PersonalCabinetFormCredentialsComponent;
    @ViewChild('formAddress')
    public formAddress!: PersonalCabinetFormAddressComponent;
    @ViewChild('formProviders')
    public formProviders!: PersonalCabinetFormProvidersComponent;

    plugForm: FormGroup = new FormGroup({})

    onSubmit() {
        console.log(this.formCredentials.credentialsForm.value)
        console.log(this.formAddress.addressForm.value)
        console.log(this.formProviders.gasProviderForm.value)
        console.log(this.formProviders.khimvoloknoProviderForm.value)
        console.log(this.formProviders.vodokanalProviderForm.value)
        console.log(this.formProviders.oblenergoProviderForm.value)
    }
}
