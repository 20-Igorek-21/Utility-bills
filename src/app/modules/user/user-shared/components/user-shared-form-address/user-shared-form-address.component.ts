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
        city: new FormControl<string>('Черкаси', Validators.required),
        street: new FormControl<string>('Свободи', Validators.required),
        house: new FormControl<string>('5', Validators.required),
        flat: new FormControl<number | null>(null)
    })

}
