import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
let UserIndicatorsFormProvidersComponent = class UserIndicatorsFormProvidersComponent {
    constructor() {
        this.isShowGas = false;
        this.isShowOblenergo = false;
        this.isShowKhimvolokno = false;
        this.isShowVodokanal = false;
        this.providersForm = new FormGroup({
            gasNumber: new FormControl(null),
            gasId: new FormControl('d6bec95b-1345-44a0-9d85-64a038382005'),
            gasStatus: new FormControl(false),
            oblenergoNumber: new FormControl(null),
            oblenergoId: new FormControl('38b5c1ab-24fb-4c4c-8351-5e9dcdcc8778'),
            oblenergoStatus: new FormControl(false),
            khimvoloknoNumber: new FormControl(null),
            khimvoloknoId: new FormControl('2f0906c2-9ffe-4327-9015-de9a483dcbeb'),
            khimvoloknoStatus: new FormControl(false),
            vodokanalNumber: new FormControl(null),
            vodokanalId: new FormControl('c3f89ec7-ae6a-4c9a-8ee3-c9081c1b330b'),
            vodokanalStatus: new FormControl(false)
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
};
UserIndicatorsFormProvidersComponent = __decorate([
    Component({
        selector: 'app-user-indicators-form-providers',
        templateUrl: './user-indicators-form-providers.component.html',
        styleUrls: ['./user-indicators-form-providers.component.css']
    })
], UserIndicatorsFormProvidersComponent);
export { UserIndicatorsFormProvidersComponent };
//# sourceMappingURL=user-indicators-form-providers.component.js.map