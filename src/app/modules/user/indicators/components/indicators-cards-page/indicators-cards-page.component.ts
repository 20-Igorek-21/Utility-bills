import {Component, Input, OnInit} from '@angular/core';

// import {FormGroup, Validators} from "@angular/forms";
// import {FormControl} from "@ngneat/reactive-forms";
// import {IUserAccount} from "../../../user-shared/types/user-shared-account.interface";

@Component({
    selector: 'app-indicators-cards-page',
    templateUrl: './indicators-cards-page.component.html',
    styleUrls: ['./indicators-cards-page.component.css']
})
export class IndicatorsCardsPageComponent  {
    @Input() card!: any



    // indicatorsForm: FormGroup = new FormGroup({
    //     indicator: new FormControl<string>('', [
    //         Validators.required, Validators.pattern('') // додати валідатор на введення чисел
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
    //         alert('Показники відправлені')
    //     }
    // }
}
