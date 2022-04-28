import {Component, Input, OnInit} from '@angular/core';

import {FormArray, FormGroup, Validators} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";

@Component({
    selector: 'app-indicators-cards-page',
    templateUrl: './indicators-cards-page.component.html',
    styleUrls: ['./indicators-cards-page.component.css']
})
export class IndicatorsCardsPageComponent  {

    // indicatorsForm: FormGroup = new FormGroup({
    //     indicators: new FormArray( [
    //
    //     ])
    // })
    //
    //
    // public get controls() {
    //     return {
    //         indicator: this.indicatorsForm.get('indicator') as FormControl<string>
    //     }
    // }
    //
    // onSubmit(): void {
    //     if(this.indicatorsForm.valid) {
    //         console.log( this.indicatorsForm.value)
    //         this.indicatorsForm.reset();
    //         // alert('Показники відправлені')
    //     }
    // }

}

// indicatorsForm: FormGroup = new FormGroup({
//     indicator: new FormControl<string>('', [
//         Validators.required, Validators.pattern('')
//     ])
// })
//
//
// public get controls() {
//     return {
//         indicator: this.indicatorsForm.get('indicator') as FormControl<string>
//     }
// }
//
// onSubmit(): void {
//     if(this.indicatorsForm.valid) {
//     console.log( this.indicatorsForm.value)
//     this.indicatorsForm.reset();
//     alert('Показники відправлені')
// }
// }
