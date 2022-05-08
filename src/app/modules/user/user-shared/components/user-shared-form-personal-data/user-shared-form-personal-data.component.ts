import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-shared-form-personal-data',
    templateUrl: './user-shared-form-personal-data.component.html',
    styleUrls: ['./user-shared-form-personal-data.component.css']
})
export class UserSharedFormPersonalDataComponent {

    personalDataForm: FormGroup = new FormGroup({
        fullName: new FormControl<string>('', Validators.required),
        phone: new FormControl<number | null>(null, [
            Validators.required, Validators.pattern('')
        ])
    })
}
