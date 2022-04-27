import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
let PersonalCabinetFormEditorPageComponent = class PersonalCabinetFormEditorPageComponent {
    constructor(userSharedFetchAccountService) {
        this.userSharedFetchAccountService = userSharedFetchAccountService;
        this.cards = [];
        this.subscription = new Subscription();
        this.massageText = true;
        this.isShowEditorForm = true;
        this.fetchData();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    fetchData() {
        this.subscription.add(this.userSharedFetchAccountService.fetshAccount()
            .subscribe((data) => {
            this.cards = data;
        }));
    }
    onShowEditorForm() {
        this.isShowEditorForm = false;
    }
    isCloseEditorForm() {
        this.isShowEditorForm = true;
    }
};
PersonalCabinetFormEditorPageComponent = __decorate([
    Component({
        selector: 'app-personal-cabinet-form-editor-page',
        templateUrl: './personal-cabinet-form-editor-page.component.html',
        styleUrls: ['./personal-cabinet-form-editor-page.component.css']
    })
], PersonalCabinetFormEditorPageComponent);
export { PersonalCabinetFormEditorPageComponent };
//# sourceMappingURL=personal-cabinet-form-editor-page.component.js.map