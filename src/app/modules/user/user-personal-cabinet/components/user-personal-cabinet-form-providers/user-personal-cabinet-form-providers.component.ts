import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-personal-cabinet-form-providers',
    templateUrl: './user-personal-cabinet-form-providers.component.html',
    styleUrls: ['./user-personal-cabinet-form-providers.component.css']
})
export class UserPersonalCabinetFormProvidersComponent {

    gasProviderForm: FormGroup = new FormGroup({
        number: new FormControl<number | null>(null, Validators.minLength(7)),
        id: new FormControl<string>('d6bec95b-1345-44a0-9d85-64a038382005'),
        status: new FormControl<boolean>(true)
    })

    oblenergoProviderForm: FormGroup = new FormGroup({
        number: new FormControl<number | null>(null),
        id: new FormControl<string>('38b5c1ab-24fb-4c4c-8351-5e9dcdcc8778'),
        status: new FormControl<boolean>(true)
    })

    khimvoloknoProviderForm: FormGroup = new FormGroup({
        number: new FormControl<number | null>(null),
        id: new FormControl<string>('2f0906c2-9ffe-4327-9015-de9a483dcbeb'),
        status: new FormControl<boolean>(true)
    })

    vodokanalProviderForm: FormGroup = new FormGroup({
        number: new FormControl<number | null>(null),
        id: new FormControl<string>('c3f89ec7-ae6a-4c9a-8ee3-c9081c1b330b'),
        status: new FormControl<boolean>(true)
    })

    public get controls() {
        return {
            number: this.gasProviderForm.get('number') as FormControl<string>
        }
    }
}
