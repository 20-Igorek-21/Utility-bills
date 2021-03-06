import { Component } from '@angular/core';

@Component({
    selector: 'app-user-indicators-input-page-view',
    templateUrl: './user-indicators-cards-page-view.component.html',
    styleUrls: ['./user-indicators-cards-page-view.component.css']
})
export class UserIndicatorsCardsPageViewComponent {

    public isLock = false;

    public lock(): void {
        this.isLock = true
    }

    public unLock(): void {
        this.isLock = false
    }
}
