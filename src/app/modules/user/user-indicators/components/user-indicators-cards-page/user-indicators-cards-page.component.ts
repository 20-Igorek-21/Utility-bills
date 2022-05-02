import {Component, OnInit} from '@angular/core';

import {FormGroup} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";


@Component({
    selector: 'app-user-indicators-cards-page',
    templateUrl: './user-indicators-cards-page.component.html',
    styleUrls: ['./user-indicators-cards-page.component.css']
})
export class UserIndicatorsCardsPageComponent implements OnInit {

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
