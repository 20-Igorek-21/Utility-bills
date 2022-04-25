import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
let PersonalCabinetFormEditorComponent = class PersonalCabinetFormEditorComponent {
    constructor() {
        this.isLinear = false;
        this.isCloseEditorForm = new EventEmitter;
        this.plugForm = new FormGroup({});
    }
    onCloseWindow() {
        this.isCloseEditorForm.emit();
    }
    onSubmit() {
        console.log(this.formCredentials.credentialsForm.value);
        console.log(this.formAddress.addressForm.value);
        console.log(this.formProviders.gasProviderForm.value);
        console.log(this.formProviders.khimvoloknoProviderForm.value);
        console.log(this.formProviders.vodokanalProviderForm.value);
        console.log(this.formProviders.oblenergoProviderForm.value);
    }
};
__decorate([
    ViewChild('formCredentials')
], PersonalCabinetFormEditorComponent.prototype, "formCredentials", void 0);
__decorate([
    ViewChild('formAddress')
], PersonalCabinetFormEditorComponent.prototype, "formAddress", void 0);
__decorate([
    ViewChild('formProviders')
], PersonalCabinetFormEditorComponent.prototype, "formProviders", void 0);
__decorate([
    Output()
], PersonalCabinetFormEditorComponent.prototype, "isCloseEditorForm", void 0);
PersonalCabinetFormEditorComponent = __decorate([
    Component({
        selector: 'app-personal-cabinet-form-editor',
        templateUrl: './personal-cabinet-form-editor.component.html',
        styleUrls: ['./personal-cabinet-form-editor.component.css']
    })
], PersonalCabinetFormEditorComponent);
export { PersonalCabinetFormEditorComponent };
//# sourceMappingURL=personal-cabinet-form-editor.component.js.map