import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';

@Component({
    selector: 'app-personal-cabinet-form-credentials',
    templateUrl: './personal-cabinet-form-credentials.component.html',
    styleUrls: ['./personal-cabinet-form-credentials.component.css']
})
export class PersonalCabinetFormCredentialsComponent {

    communalAccountForm: FormGroup = new FormGroup({
        fullName: new FormControl<string>(''),
        city: new FormControl<string>(''),
        street: new FormControl<string>(''),
        house: new FormControl<string>(''),
        apartment: new FormControl<number>(),
        phone: new FormControl<string>('+38(0', [
            Validators.required, Validators.pattern('')
        ])
    })

        // /\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/

}
