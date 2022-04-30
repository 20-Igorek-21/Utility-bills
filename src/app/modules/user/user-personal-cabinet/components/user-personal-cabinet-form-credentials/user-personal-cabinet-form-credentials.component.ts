import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
    selector: 'app-user-personal-cabinet-form-credentials',
    templateUrl: './user-personal-cabinet-form-credentials.component.html',
    styleUrls: ['./user-personal-cabinet-form-credentials.component.css']
})
export class UserPersonalCabinetFormCredentialsComponent  {

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
}
