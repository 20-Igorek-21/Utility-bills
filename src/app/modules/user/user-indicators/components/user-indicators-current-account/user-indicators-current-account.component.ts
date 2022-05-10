import { Component, Input, OnInit } from '@angular/core';
import { IUserAccountData } from '../../../user-shared/types/user-shared-account.interface';

@Component({
    selector: 'app-user-indicators-current-account',
    templateUrl: './user-indicators-current-account.component.html',
    styleUrls: ['./user-indicators-current-account.component.css']
})
export class UserIndicatorsCurrentAccountComponent implements OnInit {

    public flatText = '';

    @Input() account!: IUserAccountData;

    ngOnInit(): void {
        if (this.account.address?.flat === null) {
            this.flatText = '';
        } else {
            this.flatText = ', кв.';
        }
    }
}
