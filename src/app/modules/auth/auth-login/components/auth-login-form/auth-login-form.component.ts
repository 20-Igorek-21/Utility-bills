import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
import { AuthSharedUserService } from '../../../auth-shared/services';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-auth-login-form',
    templateUrl: './auth-login-form.component.html',
    styleUrls: ['./auth-login-form.component.css']
})
export class AuthLoginFormComponent {

    public isRequestLoading = false;

    constructor( private router: Router, private authSharedUserService: AuthSharedUserService) { }

    loginForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
    })

    public get controls() {
        return {
            email: this.loginForm.get('email') as FormControl<string>,
            password: this.loginForm.get('password') as FormControl<string>
        }
    }

    public onSubmit() {
        if(!this.loginForm.invalid) {
            this.isRequestLoading = true;
            this.authSharedUserService.loginUser(this.loginForm)
                .pipe( finalize( () => {
                    this.isRequestLoading = false;
                }))
                .subscribe( () => {
                    this.router.navigateByUrl('user/indicators');
                },
                error => {
                    if (error.error.message) {
                        this.loginForm.get('email')?.setErrors({ emailOrPasswordInvalid: true });
                    }
                })
        }
    }
}
