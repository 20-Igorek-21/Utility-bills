import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
let PersonalCabinetFormEditorComponent = class PersonalCabinetFormEditorComponent {
    constructor(personalCabinetService) {
        this.personalCabinetService = personalCabinetService;
        this.isCloseEditorForm = new EventEmitter;
        this.fetchData = new EventEmitter;
        this.plugForm = new FormGroup({});
    }
    onCloseWindow() {
        this.resetForm();
    }
    resetForm() {
        this.isCloseEditorForm.emit();
        this.formCredentials.credentialsForm.reset();
        this.formAddress.addressForm.reset();
        this.formProviders.gasProviderForm.reset();
        this.formProviders.khimvoloknoProviderForm.reset();
        this.formProviders.vodokanalProviderForm.reset();
        this.formProviders.oblenergoProviderForm.reset();
    }
    onSubmit() {
        this.personalCabinetService.createAccount(this.formCredentials.credentialsForm.value, this.formAddress.addressForm.value, this.formProviders.gasProviderForm.value, this.formProviders.khimvoloknoProviderForm.value, this.formProviders.vodokanalProviderForm.value, this.formProviders.oblenergoProviderForm.value).subscribe((d) => {
            this.fetchData.emit();
        });
        this.resetForm();
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
__decorate([
    Output()
], PersonalCabinetFormEditorComponent.prototype, "fetchData", void 0);
PersonalCabinetFormEditorComponent = __decorate([
    Component({
        selector: 'app-personal-cabinet-form-editor',
        templateUrl: './personal-cabinet-form-editor.component.html',
        styleUrls: ['./personal-cabinet-form-editor.component.css']
    })
], PersonalCabinetFormEditorComponent);
export { PersonalCabinetFormEditorComponent };
//# sourceMappingURL=personal-cabinet-form-editor.component.js.map