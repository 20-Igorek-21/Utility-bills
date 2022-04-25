import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let PersonalCabinetFormProvidersComponent = class PersonalCabinetFormProvidersComponent {
    constructor() {
        this.gasProviderForm = new FormGroup({
            gasProvider: new FormControl('', Validators.minLength(7))
        });
        this.oblenergoProviderForm = new FormGroup({
            oblenergoProvider: new FormControl('')
        });
        this.khimvoloknoProviderForm = new FormGroup({
            khimvoloknoProvider: new FormControl('')
        });
        this.vodokanalProviderForm = new FormGroup({
            vodokanalProvider: new FormControl('')
        });
    }
    get controls() {
        return {
            gasProvider: this.gasProviderForm.get('gasProvider')
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