import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-indicators-form-personal-data',
    templateUrl: './user-indicators-form-personal-data.component.html',
    styleUrls: ['./user-indicators-form-personal-data.component.css']
})
export class UserIndicatorsFormPersonalDataComponent {

    personalDataForm: FormGroup = new FormGroup({
        fullName: new FormControl<string>('', Validators.required),
        phone: new FormControl<number | null>(null, [
            Validators.required, Validators.pattern('')
        ])
    })

}
