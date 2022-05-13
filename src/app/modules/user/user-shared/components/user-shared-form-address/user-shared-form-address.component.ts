import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { IUserAccountData } from '../../types/user-shared-account.interface';

@Component({
    selector: 'app-user-shared-form-address',
    templateUrl: './user-shared-form-address.component.html',
    styleUrls: ['./user-shared-form-address.component.css']
})
export class UserSharedFormAddressComponent implements OnInit{

    @Input() personalData: IUserAccountData[] = [];
    @Input() isAccountDataCanBeChanged!: boolean;

    ngOnInit() {
        if (this.isAccountDataCanBeChanged) {
            this.addressForm.patchValue({
                city: this.personalData[0].address.city,
                street: this.personalData[0].address.street,
                house: this.personalData[0].address.house,
                flat: this.personalData[0].address.flat
            })
        }
    }

    addressForm: FormGroup = new FormGroup({
        city: new FormControl<string>('', Validators.required),
        street: new FormControl<string>('', Validators.required),
        house: new FormControl<string>('', Validators.required),
        flat: new FormControl<number | null>(null)
    })
}
