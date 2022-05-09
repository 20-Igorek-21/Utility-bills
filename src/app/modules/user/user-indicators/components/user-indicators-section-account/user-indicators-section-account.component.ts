import {Component, Input, OnInit} from '@angular/core';
import {IUserAccountData} from "../../../user-shared/types/user-shared-account.interface";

@Component({
  selector: 'app-user-indicators-section-account',
  templateUrl: './user-indicators-section-account.component.html',
  styleUrls: ['./user-indicators-section-account.component.css']
})
export class UserIndicatorsSectionAccountComponent implements OnInit{
    @Input() card!: IUserAccountData;
    constructor() { }

    ngOnInit(): void {
        if (this.card.id) {
            localStorage.setItem('card',this.card.id);
        }
    }
}
