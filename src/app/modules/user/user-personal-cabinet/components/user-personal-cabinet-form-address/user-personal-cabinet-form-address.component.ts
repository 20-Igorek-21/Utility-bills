import { Component } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-personal-cabinet-form-address',
    templateUrl: './user-personal-cabinet-form-address.component.html',
    styleUrls: ['./user-personal-cabinet-form-address.component.css']
})
export class UserPersonalCabinetFormAddressComponent {

    addressForm: FormGroup = new FormGroup({
        city: new FormControl<string>('', Validators.required),
        street: new FormControl<string>('', Validators.required),
        house: new FormControl<string>('', Validators.required),
        apartment: new FormControl<number | null>(null)
    })
}
