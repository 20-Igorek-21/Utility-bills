import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let PersonalCabinetFormAddressComponent = class PersonalCabinetFormAddressComponent {
    constructor() {
        this.addressForm = new FormGroup({
            city: new FormControl('', Validators.required),
            street: new FormControl('', Validators.required),
            house: new FormControl('', Validators.required),
            apartment: new FormControl(null)
        });
    }
};
PersonalCabinetFormAddressComponent = __decorate([
    Component({
        selector: 'app-personal-cabinet-form-address',
        templateUrl: './personal-cabinet-form-address.component.html',
        styleUrls: ['./personal-cabinet-form-address.component.css']
    })
], PersonalCabinetFormAddressComponent);
export { PersonalCabinetFormAddressComponent };
//# sourceMappingURL=personal-cabinet-form-address.component.js.map