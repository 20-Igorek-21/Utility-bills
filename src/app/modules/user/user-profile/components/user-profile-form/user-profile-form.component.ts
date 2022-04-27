import { Component, OnDestroy} from '@angular/core';
import { Subscription} from 'rxjs';
import { Router} from '@angular/router';

import { FormGroup, Validators} from '@angular/forms';
import { FormControl} from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL} from '../../../../../constants';

@Component({
    selector: 'app-user-profile-form',
    templateUrl: './user-profile-form.component.html',
    styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements OnDestroy {

    private subscription: Subscription = new Subscription();

    constructor(
        private readonly router: Router) { }

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

    }
}
