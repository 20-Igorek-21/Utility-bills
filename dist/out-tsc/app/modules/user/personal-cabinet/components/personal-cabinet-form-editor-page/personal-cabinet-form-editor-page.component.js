import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PersonalCabinetFormEditorPageComponent = class PersonalCabinetFormEditorPageComponent {
    constructor(personalCabinetService) {
        this.personalCabinetService = personalCabinetService;
        this.cards = [];
        this.massageText = true;
        this.isShowEditorForm = true;
        this.fetchData();
    }
    fetchData() {
        this.personalCabinetService.fetshAccount()
            .subscribe((data) => {
            this.cards = data;
        });
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