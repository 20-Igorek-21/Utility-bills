import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let AuthResetPasswordFormComponent = class AuthResetPasswordFormComponent {
    constructor() {
        this.resetPasswordForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }
    get controls() {
        return {
            email: this.resetPasswordForm.get('email')
        };
    }
    onSubmit() {
        if (!this.resetPasswordForm.invalid) {
        }
    }
};
AuthResetPasswordFormComponent = __decorate([
    Component({
        selector: 'app-auth-reset-password-form',
        templateUrl: './auth-reset-password-form.component.html',
        styleUrls: ['./auth-reset-password-form.component.css']
    })
], AuthResetPasswordFormComponent);
export { AuthResetPasswordFormComponent };
//# sourceMappingURL=auth-reset-password-form.component.js.map