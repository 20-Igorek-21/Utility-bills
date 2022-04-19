import { Component } from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';

@Component({
    selector: 'app-auth-reset-password-form',
    templateUrl: './auth-reset-password-form.component.html',
    styleUrls: ['./auth-reset-password-form.component.css']
})
export class AuthResetPasswordFormComponent {

    constructor() { }

    resetPasswordForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email])
    })

    public get controls() {
        return {
            email: this.resetPasswordForm.get('email') as FormControl<string>
        }
    }

    public onSubmit() {
        if(!this.resetPasswordForm.invalid) {

        }
    }

}
