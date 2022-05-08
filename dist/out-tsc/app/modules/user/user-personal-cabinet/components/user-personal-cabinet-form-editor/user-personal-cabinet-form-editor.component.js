import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
let UserPersonalCabinetFormEditorComponent = class UserPersonalCabinetFormEditorComponent {
    constructor(userSharedDataAccountService, router) {
        this.userSharedDataAccountService = userSharedDataAccountService;
        this.router = router;
        this.subscription = new Subscription();
        this.isCloseEditorForm = new EventEmitter;
        this.fetchData = new EventEmitter;
        this.plugForm = new FormGroup({});
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onCloseWindow() {
        this.resetForm();
    }
    resetForm() {
        this.isCloseEditorForm.emit();
        // this.formCredentials.credentialsForm.reset();
        // this.formAddress.addressForm.reset();
        // this.formProviders.gasProviderForm.reset();
        // this.formProviders.khimvoloknoProviderForm.reset();
        // this.formProviders.vodokanalProviderForm.reset();
        // this.formProviders.oblenergoProviderForm.reset();
    }
    onSubmit() {
        //     this.subscription.add(this.userSharedDataAccountService.createAccount(
        //         this.formCredentials.credentialsForm.value,
        //         this.formAddress.addressForm.value,
        //         this.formProviders.gasProviderForm.value,
        //         this.formProviders.khimvoloknoProviderForm.value,
        //         this.formProviders.vodokanalProviderForm.value,
        //         this.formProviders.oblenergoProviderForm.value
        //     ).subscribe( (res:object) => {
        //         console.log(res)
        //         this.fetchData.emit()
        //     },
        //     error => {
        //         console.log(error)
        //     }
        //     ))
        //     this.resetForm()
        // }
    }
};
__decorate([
    ViewChild('formCredentials')
], UserPersonalCabinetFormEditorComponent.prototype, "formCredentials", void 0);
__decorate([
    ViewChild('formAddress')
], UserPersonalCabinetFormEditorComponent.prototype, "formAddress", void 0);
__decorate([
    ViewChild('formProviders')
], UserPersonalCabinetFormEditorComponent.prototype, "formProviders", void 0);
__decorate([
    Output()
], UserPersonalCabinetFormEditorComponent.prototype, "isCloseEditorForm", void 0);
__decorate([
    Output()
], UserPersonalCabinetFormEditorComponent.prototype, "fetchData", void 0);
UserPersonalCabinetFormEditorComponent = __decorate([
    Component({
        selector: 'app-user-personal-cabinet-form-editor',
        templateUrl: './user-personal-cabinet-form-editor.component.html',
        styleUrls: ['./user-personal-cabinet-form-editor.component.css']
    })
], UserPersonalCabinetFormEditorComponent);
export { UserPersonalCabinetFormEditorComponent };
//# sourceMappingURL=user-personal-cabinet-form-editor.component.js.map