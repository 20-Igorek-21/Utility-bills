import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-personal-cabinet-form-credentials',
    templateUrl: './personal-cabinet-form-credentials.component.html',
    styleUrls: ['./personal-cabinet-form-credentials.component.css']
})
export class PersonalCabinetFormCredentialsComponent {

    credentialsForm: FormGroup = new FormGroup({
        fullName: new FormControl<string>('', Validators.required),
        phone: new FormControl<number | null>(null, [
            Validators.required, Validators.pattern('')
        ])
    })

    public get controls() {
        return {
            phone: this.credentialsForm.get('phone')
        }
    }
    // private emailPattern = /(^$|(^([^<>()\[\]\\,;:\s@"]+(\.[^<>()\[\]\\,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
    //  PHONE_PATTERN = /\(\d{3}\)\-\d{3}\-\d{4}/;
    //  PHONE_MASK = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

}
