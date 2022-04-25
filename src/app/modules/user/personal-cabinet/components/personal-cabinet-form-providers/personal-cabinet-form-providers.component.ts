import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-personal-cabinet-form-providers',
    templateUrl: './personal-cabinet-form-providers.component.html',
    styleUrls: ['./personal-cabinet-form-providers.component.css']
})
export class PersonalCabinetFormProvidersComponent{

    public set status(value:string){
        if (value.length === 10) {
            true
        }
    }

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
