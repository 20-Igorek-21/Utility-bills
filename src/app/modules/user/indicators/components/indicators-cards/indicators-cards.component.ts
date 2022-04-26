import {Component, Input } from '@angular/core';
import { FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
@Component({
    selector: 'app-indicators-cards',
    templateUrl: './indicators-cards.component.html',
    styleUrls: ['./indicators-cards.component.css']
})
export class IndicatorsCardsComponent {
   @Input() title = 'Введіть показники:';

   constructor() { }

    step = true;
    indicatorsForm: FormGroup = new FormGroup({
        indicator: new FormControl<string>('', [
            Validators.required, Validators.pattern('') // додати валідатор на введення чисел
        ])
    })

    public get controls() {
        return {
            indicator: this.indicatorsForm.get('indicator') as FormControl<string>
        }
    }
    setStep(index: boolean): void {
        this.step = index;
    }

    onSubmit(): void {
        if(this.indicatorsForm.valid) {
            this.step = true;
            console.log( this.indicatorsForm.value)
            this.indicatorsForm.reset();
            alert('Показники відправлені')
        }

    }
}