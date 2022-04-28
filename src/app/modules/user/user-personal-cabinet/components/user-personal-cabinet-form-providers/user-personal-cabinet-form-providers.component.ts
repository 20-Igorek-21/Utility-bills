import { Component } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-personal-cabinet-form-providers',
    templateUrl: './user-personal-cabinet-form-providers.component.html',
    styleUrls: ['./user-personal-cabinet-form-providers.component.css']
})
export class UserPersonalCabinetFormProvidersComponent {

    gasProviderForm: FormGroup = new FormGroup({
        code: new FormControl<string>('', Validators.minLength(7)),
        name: new FormControl<string>('gasProvider'),
        status: new FormControl<boolean>(false)
    })

    oblenergoProviderForm: FormGroup = new FormGroup({
        code: new FormControl<string>(''),
        name: new FormControl<string>('oblenergoProvider'),
        status: new FormControl<boolean>(false)
    })

    khimvoloknoProviderForm: FormGroup = new FormGroup({
        code: new FormControl<string>(''),
        name: new FormControl<string>('khimvoloknoProvider'),
        status: new FormControl<boolean>(false)
    })

    vodokanalProviderForm: FormGroup = new FormGroup({
        code: new FormControl<string>(''),
        name: new FormControl<string>('vodokanalProvider'),
        status: new FormControl<boolean>(false)
    })

    public get controls() {
        return {
            gasCode: this.gasProviderForm.get('gasCode') as FormControl<string>
        }
    }
}
