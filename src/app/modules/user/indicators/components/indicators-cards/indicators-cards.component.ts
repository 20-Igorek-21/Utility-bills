import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";
@Component({
    selector: 'app-indicators-cards',
    templateUrl: './indicators-cards.component.html',
    styleUrls: ['./indicators-cards.component.css']
})
export class IndicatorsCardsComponent  {
   @Input() title = '';

    constructor() { }
    indicatorsForm: FormGroup = new FormGroup({
        indicator: new FormControl<string>('', [
            Validators.required, Validators.pattern('')
        ])
    })

    public get controls() {
        return {
            indicator: this.indicatorsForm.get('indicator') as FormControl<string>
        }
    }

    onSubmit(): void {
        if(this.indicatorsForm.valid) {
            console.log( this.indicatorsForm.value)
            this.indicatorsForm.reset();
            alert('Показники відправлені')
        }
    }
}
