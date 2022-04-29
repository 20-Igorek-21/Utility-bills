import {Component, OnInit} from '@angular/core';

import {FormGroup} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";


@Component({
    selector: 'app-indicators-cards-page',
    templateUrl: './indicators-cards-page.component.html',
    styleUrls: ['./indicators-cards-page.component.css']
})
export class IndicatorsCardsPageComponent  implements OnInit {

    ngOnInit(): void {
    }

    indicatorsForm: FormGroup = new FormGroup({
        indicators: new FormControl<string>('', [])
    })


    public get controls() {
        return {
            indicators: this.indicatorsForm.get('indicator') as FormControl<string>
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
