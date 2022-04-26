import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let PersonalCabinetFormProvidersComponent = class PersonalCabinetFormProvidersComponent {
    constructor() {
        this.gasProviderForm = new FormGroup({
            code: new FormControl('', Validators.minLength(7)),
            name: new FormControl('gasProvider'),
            status: new FormControl(false)
        });
        this.oblenergoProviderForm = new FormGroup({
            code: new FormControl(''),
            name: new FormControl('oblenergoProvider'),
            status: new FormControl(false)
        });
        this.khimvoloknoProviderForm = new FormGroup({
            code: new FormControl(''),
            name: new FormControl('khimvoloknoProvider'),
            status: new FormControl(false)
        });
        this.vodokanalProviderForm = new FormGroup({
            code: new FormControl(''),
            name: new FormControl('vodokanalProvider'),
            status: new FormControl(false)
        });
    }
    set status(value) {
        if (value.length === 10) {
            true;
        }
    }
    get controls() {
        return {
            gasCode: this.gasProviderForm.get('gasCode')
        };
    }
};
PersonalCabinetFormProvidersComponent = __decorate([
    Component({
        selector: 'app-personal-cabinet-form-providers',
        templateUrl: './personal-cabinet-form-providers.component.html',
        styleUrls: ['./personal-cabinet-form-providers.component.css']
    })
], PersonalCabinetFormProvidersComponent);
export { PersonalCabinetFormProvidersComponent };
//# sourceMappingURL=personal-cabinet-form-providers.component.js.map