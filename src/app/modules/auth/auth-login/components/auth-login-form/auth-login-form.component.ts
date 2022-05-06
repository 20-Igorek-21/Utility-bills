import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

import { MIN_LENGTH_SYMBOL } from '../../../../../constants';

@Component({
    selector: 'app-auth-login-form',
    templateUrl: './auth-login-form.component.html',
    styleUrls: ['./auth-login-form.component.css']
})
export class AuthLoginFormComponent  {

    constructor( private router: Router ) { }

    loginForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        checkbox: new FormControl<boolean>(false)
    })

    public get controls() {
        return {
            email: this.loginForm.get('email') as FormControl<string>,
            password: this.loginForm.get('password') as FormControl<string>
        }
    }

    public onSubmit() {
        // if(this.loginForm.invalid) {
        this.router.navigateByUrl('user/indicators')
        // }
    }
}
