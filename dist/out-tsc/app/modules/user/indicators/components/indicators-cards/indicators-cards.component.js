import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@ngneat/reactive-forms";
let IndicatorsCardsComponent = class IndicatorsCardsComponent {
    constructor() {
        this.title = '';
        this.indicatorsForm = new FormGroup({
            indicator: new FormControl('', [
                Validators.required, Validators.pattern('') // додати валідатор на введення чисел
            ])
        });
    }
    get controls() {
        return {
            indicator: this.indicatorsForm.get('indicator')
        };
    }
    onSubmit() {
        if (this.indicatorsForm.valid) {
            console.log(this.indicatorsForm.value);
            this.indicatorsForm.reset();
            alert('Показники відправлені');
        }
    }
};
__decorate([
    Input()
], IndicatorsCardsComponent.prototype, "title", void 0);
IndicatorsCardsComponent = __decorate([
    Component({
        selector: 'app-indicators-cards',
        templateUrl: './indicators-cards.component.html',
        styleUrls: ['./indicators-cards.component.css']
    })
], IndicatorsCardsComponent);
export { IndicatorsCardsComponent };
//# sourceMappingURL=indicators-cards.component.js.map