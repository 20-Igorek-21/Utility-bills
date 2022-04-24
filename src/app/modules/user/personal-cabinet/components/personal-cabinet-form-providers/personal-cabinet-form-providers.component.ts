import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-personal-cabinet-form-providers',
    templateUrl: './personal-cabinet-form-providers.component.html',
    styleUrls: ['./personal-cabinet-form-providers.component.css']
})
export class PersonalCabinetFormProvidersComponent{

    gasProviderForm: FormGroup = new FormGroup({
        gasProvider: new FormControl<string>('', Validators.minLength(7))
    })

    oblenergoProviderForm: FormGroup = new FormGroup({
        oblenergoProvider: new FormControl<string>('')
    })

    khimvoloknoProviderForm: FormGroup = new FormGroup({
        khimvoloknoProvider: new FormControl<string>('')
    })

    vodokanalProviderForm: FormGroup = new FormGroup({
        vodokanalProvider: new FormControl<string>('')
    })

    public get controls() {
        return {
            gasProvider: this.gasProviderForm.get('gasProvider') as FormControl<string>
        }
    }



}
