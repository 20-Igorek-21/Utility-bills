import { Component, OnDestroy} from '@angular/core';
import { Subscription} from 'rxjs';
import { Router} from '@angular/router';

import { FormGroup, Validators} from '@angular/forms';
import { FormControl} from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL} from '../../../../../constants';
import {UserSharedChangeDataUserService} from '../../../user-shared/services';
import {IUserAuth} from '../../../../core/form/types/auth-shared-user-interface';

@Component({
    selector: 'app-user-profile-form',
    templateUrl: './user-profile-form.component.html',
    styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements OnDestroy {

    private subscription: Subscription = new Subscription();

    constructor(
        private readonly router: Router,
        private readonly userSharedChangeDataUser: UserSharedChangeDataUserService) { }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    profileForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email], []),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        repeatPassword: new FormControl<string>('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
    })

    public get controls() {
        return {
            email: this.profileForm.get('email') as FormControl<string>,
            password: this.profileForm.get('password') as FormControl<string>,
            repeatPassword: this.profileForm.get('repeatPassword') as FormControl<string>,
        }
    }

    onSubmit() {
        if (!this.profileForm.invalid) {
            this.subscription.add(this.userSharedChangeDataUser.changeDataUser('af6b5f66-b848-4101-899e-59f65882b3af', this.profileForm)
                .subscribe( (r:IUserAuth) => {
                    console.log(r)
                    this.router.navigateByUrl('auth/personal-cabinet')
                },
                error => {
                    console.log(error)
                }
                ))
            this.profileForm.reset()
        }

    }
}
