import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { IUserAccountData } from '../../types/user-shared-account.interface';

@Component({
    selector: 'app-user-shared-form-personal-data',
    templateUrl: './user-shared-form-personal-data.component.html',
    styleUrls: ['./user-shared-form-personal-data.component.css']
})
export class UserSharedFormPersonalDataComponent implements OnInit {

    @Input() personalData: IUserAccountData[] = [];
    @Input() isAccountDataCanBeChanged!: boolean;

    ngOnInit() {
        if (this.isAccountDataCanBeChanged) {
            this.personalDataForm.patchValue({
                fullName: this.personalData[0].fullName,
                phone: this.personalData[0].phone
            })
        }
    }

    personalDataForm: FormGroup = new FormGroup({
        fullName: new FormControl<string>('', Validators.required),
        phone: new FormControl<number | null>(null, [
            Validators.required, Validators.pattern('')
        ])
    })
}
