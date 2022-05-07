import {Component, OnDestroy} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';
import {UserSharedDataUserAccountService, UserSharedDataUserProvidersService} from '../../../user-shared/services';
import {Subscription} from 'rxjs';
import {IUserAccount} from "../../../user-shared/types/user-shared-account.interface";


@Component({
    selector: 'app-user-indicators-cards-page',
    templateUrl: './user-indicators-cards-page.component.html',
    styleUrls: ['./user-indicators-cards-page.component.css']
})
export class UserIndicatorsCardsPageComponent implements OnDestroy {

    public isLoader = true;
    isProviderClose  = true;
    isAlertOpen  = false;
    isAlertOpenProgress  = false;
    error  = false;
    massage = 'Показники надіслані!';
    private subscription: Subscription = new Subscription()
    constructor( private readonly userSharedDataUserProvidersService: UserSharedDataUserProvidersService,
                 private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {
        // this.getProvidersData();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    indicatorsForm: FormGroup = new FormGroup({
        gasIndicator: new FormControl<string>(),
        energyIndicator: new FormControl<string>(),
        tecIndicator: new FormControl<string>(),
        waterIndicator: new FormControl<string>(),
        heatIndicator: new FormControl<string>(),
    })
     id = '87812366-2915-46dd-94e0-e809a4cdafca';

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

     onSubmit(): void {
         if(this.indicatorsForm.valid) {
             this.subscription.add(this.userSharedDataUserProvidersService.sendIndicators(
                 this.indicatorsForm.value, this.id
             ).subscribe( (res:object) => {
                 console.log(res)
                 this.showNotification();
                 this.indicatorsForm.reset();
             },
             error => {
                 this.error = true;
                 this.massage = 'Сталася помилка!'
                 this.showNotification();
             }
             ))
         }
     }

     showNotification(): void {
         this.isAlertOpen = !this.isAlertOpen;
         this.isAlertOpenProgress = !this.isAlertOpenProgress;
         this.autoClose();
     }

     autoClose(): void {
         setTimeout(() => {
             this.isAlertOpen = !this.isAlertOpen;
         },2500);
         setTimeout(() => {
             this.isAlertOpenProgress = !this.isAlertOpenProgress;
         },2800)
     }

     loader(value: boolean): void {
         this.isLoader = value;
     }
}
