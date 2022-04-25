import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
let AuthLoginFormComponent = class AuthLoginFormComponent {
    constructor(router) {
        this.router = router;
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
            checkbox: new FormControl(false)
        });
    }
    get controls() {
        return {
            email: this.loginForm.get('email'),
            password: this.loginForm.get('password')
        };
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            this.router.navigateByUrl('user/personal-cabinet');
        }
    }
};
AuthLoginFormComponent = __decorate([
    Component({
        selector: 'app-auth-login-form',
        templateUrl: './auth-login-form.component.html',
        styleUrls: ['./auth-login-form.component.css']
    })
], AuthLoginFormComponent);
export { AuthLoginFormComponent };
//# sourceMappingURL=auth-login-form.component.js.map