import {Component, OnDestroy} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { AuthSharedUserService } from '../../../auth-shared/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-auth-reset-password-form',
    templateUrl: './auth-reset-password-form.component.html',
    styleUrls: ['./auth-reset-password-form.component.css']
})
export class AuthResetPasswordFormComponent implements OnDestroy {

    private subscription: Subscription = new Subscription();

    constructor(private readonly authSharedUserService: AuthSharedUserService) {}

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

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
            this.subscription.add(this.authSharedUserService.resetPassword(this.resetPasswordForm.value)
                .subscribe( (res) => {
                    console.log(res)
                }))
        }
    }
}
