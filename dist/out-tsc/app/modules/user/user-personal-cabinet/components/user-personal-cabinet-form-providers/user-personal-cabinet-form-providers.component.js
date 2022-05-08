import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let UserPersonalCabinetFormProvidersComponent = class UserPersonalCabinetFormProvidersComponent {
    constructor() {
        this.isShowGas = false;
        this.isShowOblenergo = false;
        this.isShowKhimvolokno = false;
        this.isShowVodokanal = false;
        this.gasProviderForm = new FormGroup({
            number: new FormControl(null, Validators.minLength(7)),
            id: new FormControl('d6bec95b-1345-44a0-9d85-64a038382005'),
            status: new FormControl(true)
        });
        this.oblenergoProviderForm = new FormGroup({
            number: new FormControl(null),
            id: new FormControl('38b5c1ab-24fb-4c4c-8351-5e9dcdcc8778'),
            status: new FormControl(true)
        });
        this.khimvoloknoProviderForm = new FormGroup({
            number: new FormControl(null),
            id: new FormControl('2f0906c2-9ffe-4327-9015-de9a483dcbeb'),
            status: new FormControl(true)
        });
        this.vodokanalProviderForm = new FormGroup({
            number: new FormControl(null),
            id: new FormControl('c3f89ec7-ae6a-4c9a-8ee3-c9081c1b330b'),
            status: new FormControl(true)
        });
    }
    changeStatusGas() {
        this.isShowGas = !this.isShowGas;
    }
    changeStatusOblenergo() {
        this.isShowOblenergo = !this.isShowOblenergo;
    }
    changeStatusKhimvolokno() {
        this.isShowKhimvolokno = !this.isShowKhimvolokno;
    }
    changeStatusVodokanal() {
        this.isShowVodokanal = !this.isShowVodokanal;
    }
    get controls() {
        return {
            number: this.gasProviderForm.get('number')
        };
    }
};
UserPersonalCabinetFormProvidersComponent = __decorate([
    Component({
        selector: 'app-user-personal-cabinet-form-providers',
        templateUrl: './user-personal-cabinet-form-providers.component.html',
        styleUrls: ['./user-personal-cabinet-form-providers.component.css']
    })
], UserPersonalCabinetFormProvidersComponent);
export { UserPersonalCabinetFormProvidersComponent };
//# sourceMappingURL=user-personal-cabinet-form-providers.component.js.map