import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-shared-form-address',
    templateUrl: './user-shared-form-address.component.html',
    styleUrls: ['./user-shared-form-address.component.css']
})
export class UserSharedFormAddressComponent {

    addressForm: FormGroup = new FormGroup({
        city: new FormControl<string>('', Validators.required),
        street: new FormControl<string>('', Validators.required),
        house: new FormControl<string>('', Validators.required),
        flat: new FormControl<number | null>(null)
    })
}
