import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
let UserProfileFormComponent = class UserProfileFormComponent {
    constructor(router, userSharedDataUserService) {
        this.router = router;
        this.userSharedDataUserService = userSharedDataUserService;
        this.subscription = new Subscription();
        this.profileForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
            repeatPassword: new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        });
    }
    ngOnInit() {
        this.subscription.add(this.userSharedDataUserService.fetchDataUser()
            .subscribe((res) => {
            console.log(res);
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    get controls() {
        return {
            email: this.profileForm.get('email'),
            password: this.profileForm.get('password'),
            repeatPassword: this.profileForm.get('repeatPassword'),
        };
    }
    onSubmit() {
        if (!this.profileForm.invalid) {
            this.subscription.add(this.userSharedDataUserService.changeDataUser('0301314c-e771-4d60-8244-91b1655e76d9', this.profileForm)
                .subscribe((res) => {
                console.log(res);
                // this.router.navigateByUrl('auth/personal-cabinet')
            }, error => {
                console.log(error);
            }));
            this.profileForm.reset();
        }
    }
};
UserProfileFormComponent = __decorate([
    Component({
        selector: 'app-user-profile-form',
        templateUrl: './user-profile-form.component.html',
        styleUrls: ['./user-profile-form.component.css']
    })
], UserProfileFormComponent);
export { UserProfileFormComponent };
//# sourceMappingURL=user-profile-form.component.js.map