import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let UserIndicatorsFormPersonalDataComponent = class UserIndicatorsFormPersonalDataComponent {
    constructor() {
        this.personalDataForm = new FormGroup({
            fullName: new FormControl('', Validators.required),
            phone: new FormControl(null, [
                Validators.required, Validators.pattern('')
            ])
        });
    }
};
UserIndicatorsFormPersonalDataComponent = __decorate([
    Component({
        selector: 'app-user-indicators-form-personal-data',
        templateUrl: './user-indicators-form-personal-data.component.html',
        styleUrls: ['./user-indicators-form-personal-data.component.css']
    })
], UserIndicatorsFormPersonalDataComponent);
export { UserIndicatorsFormPersonalDataComponent };
//# sourceMappingURL=user-indicators-form-personal-data.component.js.map