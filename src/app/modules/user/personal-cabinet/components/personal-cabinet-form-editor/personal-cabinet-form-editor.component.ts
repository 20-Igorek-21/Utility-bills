import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-personal-cabinet-form-editor',
    templateUrl: './personal-cabinet-form-editor.component.html',
    styleUrls: ['./personal-cabinet-form-editor.component.css']
})
export class PersonalCabinetFormEditorComponent implements OnInit {

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
