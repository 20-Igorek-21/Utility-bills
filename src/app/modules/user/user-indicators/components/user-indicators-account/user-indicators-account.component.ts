import {Component, Input, OnInit} from '@angular/core';
import {IUserAccount} from "../../../user-shared/types/user-shared-account.interface";

@Component({
    selector: 'app-user-indicators-account',
    templateUrl: './user-indicators-account.component.html',
    styleUrls: ['./user-indicators-account.component.css']
})
export class UserIndicatorsAccountComponent implements OnInit{

    flatText = '';
    isShowExpand = true;
    @Input() card!: IUserAccount;

    ngOnInit() {
        if (this.card.address.flat === null) {
            this.flatText = ''
        } else {
            this.flatText = ', кв.'
        }
    }

    onShowExpand() {
        this.isShowExpand = !this.isShowExpand;
    }


}
