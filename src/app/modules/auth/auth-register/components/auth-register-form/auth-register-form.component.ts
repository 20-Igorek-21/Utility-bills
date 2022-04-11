import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';

@Component({
    selector: 'app-auth-register-form',
    templateUrl: './auth-register-form.component.html',
    styleUrls: ['./auth-register-form.component.css']
})
export class AuthRegisterFormComponent  {
    constructor( private router: Router ) { }

    registerForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        checkbox: new FormControl<boolean>(false)
    })

    public get controls() {
        return {
            email: this.registerForm.get('email') as FormControl<string>,
            password: this.registerForm.get('password') as FormControl<string>,
            checkbox: this.registerForm.get('checkbox') as FormControl<boolean>
        }
    }

    public onSubmit() {
        if (!this.registerForm.invalid) {
            alert(this.registerForm.value.email + '  ' + this.registerForm.value.password);
            this.registerForm.reset();
        }

    }
}
