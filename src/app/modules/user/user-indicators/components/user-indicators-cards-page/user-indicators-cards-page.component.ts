import {Component, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-user-indicators-cards-page',
    templateUrl: './user-indicators-cards-page.component.html',
    styleUrls: ['./user-indicators-cards-page.component.css']
})
export class UserIndicatorsCardsPageComponent implements OnDestroy {

    public isLoader = true;
    constructor( ) {

    }

    ngOnDestroy() {

    }

     loader(value: boolean): void {
         this.isLoader = value;
     }
}
