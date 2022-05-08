import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let UserPersonalCabinetFormAddressComponent = class UserPersonalCabinetFormAddressComponent {
    constructor() {
        this.addressForm = new FormGroup({
            city: new FormControl('', Validators.required),
            street: new FormControl('', Validators.required),
            house: new FormControl('', Validators.required),
            flat: new FormControl(null)
        });
    }
};
UserPersonalCabinetFormAddressComponent = __decorate([
    Component({
        selector: 'app-user-personal-cabinet-form-address',
        templateUrl: './user-personal-cabinet-form-address.component.html',
        styleUrls: ['./user-personal-cabinet-form-address.component.css']
    })
], UserPersonalCabinetFormAddressComponent);
export { UserPersonalCabinetFormAddressComponent };
//# sourceMappingURL=user-personal-cabinet-form-address.component.js.map