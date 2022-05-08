import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUserAuth} from '../../../../core/form/types/auth-shared-user-interface';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {UserSharedDataUserService} from '../../../user-shared/services';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';
import {MIN_LENGTH_SYMBOL} from '../../../../../constants';

@Component({
    selector: 'app-user-personal-cabinet-form-privete-data',
    templateUrl: './user-personal-cabinet-form-privete-data.component.html',
    styleUrls: ['./user-personal-cabinet-form-privete-data.component.css']
})
export class UserPersonalCabinetFormPriveteDataComponent implements OnInit, OnDestroy {

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
