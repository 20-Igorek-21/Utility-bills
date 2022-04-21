import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-personal-cabinet-form-page',
    templateUrl: './personal-cabinet-form-page.component.html',
    styleUrls: ['./personal-cabinet-form-page.component.css']
})
export class PersonalCabinetFormPageComponent implements OnInit{

    isLinear = false;
    firstFormGroup!: FormGroup;
    secondFormGroup!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }

}
