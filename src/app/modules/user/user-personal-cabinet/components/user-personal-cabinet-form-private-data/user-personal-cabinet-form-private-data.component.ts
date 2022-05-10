import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUserAuth} from '../../../../core/form/types/auth-shared-user-interface';
import { Subscription} from 'rxjs';
import { UserSharedDataUserService } from '../../../user-shared/services';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-personal-cabinet-form-private-data',
    templateUrl: './user-personal-cabinet-form-private-data.component.html',
    styleUrls: ['./user-personal-cabinet-form-private-data.component.css']
})
export class UserPersonalCabinetFormPrivateDataComponent implements OnInit, OnDestroy {

    user!: IUserAuth;
    userId: string | undefined

    private subscription: Subscription = new Subscription();

    constructor(private readonly userSharedDataUserService: UserSharedDataUserService,
                private readonly router: Router) {}

    ngOnInit() {
        this.subscription.add(this.userSharedDataUserService.fetchDataUser()
            .subscribe( (res:IUserAuth) => {
                console.log(res)
                this.user = res
                this.userId = res.id
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

    onChangeDataUser() {
        if (!this.profileForm.invalid) {
            this.subscription.add(this.userSharedDataUserService.changeDataUser(this.profileForm)
                .subscribe( (res:IUserAuth) => {
                    console.log(res)
                    alert('дані змінено')
                    this.router.navigateByUrl('/user/personal-cabinet')
                },
                error => {
                    console.log(error);
                }
                ))
            // this.profileForm.reset();
        }
    }
}
