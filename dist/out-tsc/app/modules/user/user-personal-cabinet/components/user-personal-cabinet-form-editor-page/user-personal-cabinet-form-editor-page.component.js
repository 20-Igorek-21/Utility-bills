import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
let UserPersonalCabinetFormEditorPageComponent = class UserPersonalCabinetFormEditorPageComponent {
    constructor(userSharedDataAccountService) {
        this.userSharedDataAccountService = userSharedDataAccountService;
        this.massageText = true;
        this.isShowEditorForm = true;
        this.isLoader = true;
        this.cards = [];
        this.subscription = new Subscription();
        this.isLockEditorForm = new EventEmitter();
        this.isUnLockEditorForm = new EventEmitter();
        this.fetchData();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    fetchData() {
        this.subscription.add(this.userSharedDataAccountService.fetchAccount()
            .pipe(finalize(() => {
            this.isLoader = false;
        }))
            .subscribe((data) => {
            this.cards = data;
            if (this.cards.length === 0) {
                localStorage.removeItem('card');
                this.massageText = false;
            }
            else {
                this.massageText = true;
            }
        }, error => {
            console.log(error);
        }));
    }
    onShowEditorForm() {
        this.isShowEditorForm = false;
        this.isLockEditorForm.emit(false);
    }
    isCloseEditorForm() {
        this.isShowEditorForm = true;
        this.isUnLockEditorForm.emit(true);
    }
};
__decorate([
    Output()
], UserPersonalCabinetFormEditorPageComponent.prototype, "isLockEditorForm", void 0);
__decorate([
    Output()
], UserPersonalCabinetFormEditorPageComponent.prototype, "isUnLockEditorForm", void 0);
UserPersonalCabinetFormEditorPageComponent = __decorate([
    Component({
        selector: 'app-user-personal-cabinet-form-editor-page',
        templateUrl: './user-personal-cabinet-form-editor-page.component.html',
        styleUrls: ['./user-personal-cabinet-form-editor-page.component.css']
    })
], UserPersonalCabinetFormEditorPageComponent);
export { UserPersonalCabinetFormEditorPageComponent };
//# sourceMappingURL=user-personal-cabinet-form-editor-page.component.js.map