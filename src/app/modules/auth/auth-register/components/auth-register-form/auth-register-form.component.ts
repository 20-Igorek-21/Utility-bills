import {Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
import { AuthSharedUserService } from '../../../auth-shared/services';
import { Subscription } from 'rxjs';
import { IUserAuth } from '../../../auth-shared/types/auth-shared-user-interface';


@Component({
    selector: 'app-auth-register-form',
    templateUrl: './auth-register-form.component.html',
    styleUrls: ['./auth-register-form.component.css']
})
export class AuthRegisterFormComponent  implements OnDestroy {

    private subscription: Subscription = new Subscription();

    constructor(
        private readonly router: Router,
        private readonly authSharedUserService: AuthSharedUserService) { }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    registerForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email], []),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        repeatPassword: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
    })

    public get controls() {
        return {
            email: this.registerForm.get('email') as FormControl<string>,
            password: this.registerForm.get('password') as FormControl<string>,
            repeatPassword: this.registerForm.get('repeatPassword') as FormControl<string>,
        }
    }

    public onSubmit() {
        if (!this.registerForm.invalid) {
            this.subscription.add(this.authSharedUserService.registerUser(this.registerForm)
                .subscribe((d:IUserAuth)=> {
                    console.log(d);
                    this.router.navigateByUrl('/auth/login');
                },
                error => {
                    console.log(error)
                }
                ))
            this.registerForm.reset();
        }
    }
}
