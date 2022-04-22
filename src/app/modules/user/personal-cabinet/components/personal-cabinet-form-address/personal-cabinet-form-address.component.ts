import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-personal-cabinet-form-address',
    templateUrl: './personal-cabinet-form-address.component.html',
    styleUrls: ['./personal-cabinet-form-address.component.css']
})
export class PersonalCabinetFormAddressComponent {

    addressForm: FormGroup = new FormGroup({
        city: new FormControl<string>('', Validators.required),
        street: new FormControl<string>('', Validators.required),
        house: new FormControl<string>('', Validators.required),
        apartment: new FormControl<number>()
    })
}
