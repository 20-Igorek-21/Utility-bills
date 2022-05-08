import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { Subscription } from 'rxjs';
let UserIndicatorsCardsPageComponent = class UserIndicatorsCardsPageComponent {
    constructor(userSharedDataUserProvidersService, userSharedDataAccountService) {
        this.userSharedDataUserProvidersService = userSharedDataUserProvidersService;
        this.userSharedDataAccountService = userSharedDataAccountService;
        this.isLoader = true;
        this.isProviderClose = true;
        this.isAlertOpen = false;
        this.isAlertOpenProgress = false;
        this.error = false;
        this.massage = 'Показники надіслані!';
        this.subscription = new Subscription();
        this.indicatorsForm = new FormGroup({
            gasIndicator: new FormControl(),
            energyIndicator: new FormControl(),
            tecIndicator: new FormControl(),
            waterIndicator: new FormControl(),
            heatIndicator: new FormControl(),
        });
        this.id = '87812366-2915-46dd-94e0-e809a4cdafca';
        // this.getProvidersData();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    //отримання даних про вибраних провайдерів
    // getProvidersData(): void {
    //     this.subscription.add(this.userSharedDataAccountService.fetchAccount()
    //         .pipe( finalize( () => {
    //         }))
    //         .subscribe( (data: IUserAccount[]) => {
    //                 console.log(data)
    //                 this.cards = data
    //                 if (this.cards.length === 0) {
    //                     localStorage.removeItem('card');
    //                     // this.onShowFormAccount()
    //                 }
    //             },
    //             error => {
    //                 console.log(error);
    //             }))
    // }
    onSubmit() {
        if (this.indicatorsForm.valid) {
            this.subscription.add(this.userSharedDataUserProvidersService.sendIndicators(this.indicatorsForm.value, this.id).subscribe((res) => {
                console.log(res);
                this.showNotification();
                this.indicatorsForm.reset();
            }, error => {
                this.error = true;
                this.massage = 'Сталася помилка!';
                this.showNotification();
            }));
        }
    }
    showNotification() {
        this.isAlertOpen = !this.isAlertOpen;
        this.isAlertOpenProgress = !this.isAlertOpenProgress;
        this.autoClose();
    }
    autoClose() {
        setTimeout(() => {
            this.isAlertOpen = !this.isAlertOpen;
        }, 2500);
        setTimeout(() => {
            this.isAlertOpenProgress = !this.isAlertOpenProgress;
        }, 2800);
    }
    loader(value) {
        this.isLoader = value;
    }
};
UserIndicatorsCardsPageComponent = __decorate([
    Component({
        selector: 'app-user-indicators-cards-page',
        templateUrl: './user-indicators-cards-page.component.html',
        styleUrls: ['./user-indicators-cards-page.component.css']
    })
], UserIndicatorsCardsPageComponent);
export { UserIndicatorsCardsPageComponent };
//# sourceMappingURL=user-indicators-cards-page.component.js.map