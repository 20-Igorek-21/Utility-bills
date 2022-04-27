import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let PersonalCabinetCardComponent = class PersonalCabinetCardComponent {
    editCard() {
        console.log('ok');
    }
    deleteCard() {
        console.log('ok');
    }
};
__decorate([
    Input()
], PersonalCabinetCardComponent.prototype, "card", void 0);
PersonalCabinetCardComponent = __decorate([
    Component({
        selector: 'app-personal-cabinet-card',
        templateUrl: './personal-cabinet-card.component.html',
        styleUrls: ['./personal-cabinet-card.component.css']
    })
], PersonalCabinetCardComponent);
export { PersonalCabinetCardComponent };
//# sourceMappingURL=personal-cabinet-card.component.js.map