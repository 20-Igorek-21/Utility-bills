import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let UserPersonalCabinetFormCredentialsComponent = class UserPersonalCabinetFormCredentialsComponent {
    constructor() {
        this.credentialsForm = new FormGroup({
            fullName: new FormControl('', Validators.required),
            phone: new FormControl(null, [
                Validators.required, Validators.pattern('')
            ])
        });
    }
    get controls() {
        return {
            phone: this.credentialsForm.get('phone')
        };
    }
};
UserPersonalCabinetFormCredentialsComponent = __decorate([
    Component({
        selector: 'app-user-personal-cabinet-form-credentials',
        templateUrl: './user-personal-cabinet-form-credentials.component.html',
        styleUrls: ['./user-personal-cabinet-form-credentials.component.css']
    })
], UserPersonalCabinetFormCredentialsComponent);
export { UserPersonalCabinetFormCredentialsComponent };
//# sourceMappingURL=user-personal-cabinet-form-credentials.component.js.map