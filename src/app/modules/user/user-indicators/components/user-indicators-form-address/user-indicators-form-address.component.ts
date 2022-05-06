import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-indicators-form-address',
    templateUrl: './user-indicators-form-address.component.html',
    styleUrls: ['./user-indicators-form-address.component.css']
})
export class UserIndicatorsFormAddressComponent {

    addressForm: FormGroup = new FormGroup({
        city: new FormControl<string>('', Validators.required),
        street: new FormControl<string>('', Validators.required),
        house: new FormControl<string>('', Validators.required),
        flat: new FormControl<number | null>(null)
    })

}
