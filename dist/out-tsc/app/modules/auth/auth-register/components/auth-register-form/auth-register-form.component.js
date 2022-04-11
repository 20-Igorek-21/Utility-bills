import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';
let AuthRegisterFormComponent = class AuthRegisterFormComponent {
    constructor(router) {
        this.router = router;
        this.registerForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH_SYMBOL)]),
            checkbox: new FormControl(false)
        });
    }
    get controls() {
        return {
            email: this.registerForm.get('email'),
            password: this.registerForm.get('password'),
            checkbox: this.registerForm.get('checkbox')
        };
    }
    onSubmit() {
        if (!this.registerForm.invalid) {
            alert(this.registerForm.value.email + '  ' + this.registerForm.value.password);
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