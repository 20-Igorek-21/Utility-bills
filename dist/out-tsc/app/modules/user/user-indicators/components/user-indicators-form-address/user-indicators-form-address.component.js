import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let UserIndicatorsFormAddressComponent = class UserIndicatorsFormAddressComponent {
    constructor() {
        this.addressForm = new FormGroup({
            city: new FormControl('Черкаси', Validators.required),
            street: new FormControl('Свободи', Validators.required),
            house: new FormControl('5', Validators.required),
            flat: new FormControl(null)
        });
    }
};
UserIndicatorsFormAddressComponent = __decorate([
    Component({
        selector: 'app-user-indicators-form-address',
        templateUrl: './user-indicators-form-address.component.html',
        styleUrls: ['./user-indicators-form-address.component.css']
    })
], UserIndicatorsFormAddressComponent);
export { UserIndicatorsFormAddressComponent };
//# sourceMappingURL=user-indicators-form-address.component.js.map