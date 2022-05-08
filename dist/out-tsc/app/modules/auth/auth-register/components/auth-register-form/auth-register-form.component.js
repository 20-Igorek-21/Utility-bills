import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
import { Subscription } from 'rxjs';
let AuthRegisterFormComponent = class AuthRegisterFormComponent {
    constructor(router, authSharedUserService) {
        this.router = router;
        this.authSharedUserService = authSharedUserService;
        this.subscription = new Subscription();
        this.registerForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email], []),
            password: new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
            repeatPassword: new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    get controls() {
        return {
            email: this.registerForm.get('email'),
            password: this.registerForm.get('password'),
            repeatPassword: this.registerForm.get('repeatPassword'),
        };
    }
    onSubmit() {
        if (!this.registerForm.invalid) {
            this.subscription.add(this.authSharedUserService.registerUser(this.registerForm)
                .subscribe((d) => {
                console.log(d);
                this.router.navigateByUrl('/auth/login');
            }, error => {
                error.message();
                console.log(error);
            }));
            this.registerForm.reset();
        }
    }
};
AuthRegisterFormComponent = __decorate([
    Component({
        selector: 'app-auth-register-form',
        templateUrl: './auth-register-form.component.html',
        styleUrls: ['./auth-register-form.component.css']
    })
], AuthRegisterFormComponent);
export { AuthRegisterFormComponent };
//# sourceMappingURL=auth-register-form.component.js.map