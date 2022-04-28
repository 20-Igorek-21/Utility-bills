import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
import { IUserAuth } from '../../../../core/form/types/auth-shared-user-interface';
import { UserSharedDataUserService } from '../../../user-shared/services';

@Component({
    selector: 'app-user-profile-form',
    templateUrl: './user-profile-form.component.html',
    styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements OnDestroy, OnInit  {

    user!: IUserAuth


    private subscription: Subscription = new Subscription();

    constructor(
        private readonly router: Router,
        private readonly userSharedDataUserService: UserSharedDataUserService) {}

    ngOnInit() {
        this.subscription.add(this.userSharedDataUserService.fetchDataUser()
            .subscribe( (res:IUserAuth) => {
                console.log(res)
            }))
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    profileForm: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
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
            this.subscription.add(this.userSharedDataUserService.changeDataUser('0301314c-e771-4d60-8244-91b1655e76d9', this.profileForm)
                .subscribe( (res:IUserAuth) => {
                    console.log(res)
                    // this.router.navigateByUrl('auth/personal-cabinet')
                },
                error => {
                    console.log(error)
                }
                ))
            this.profileForm.reset()
        }

    }
}
