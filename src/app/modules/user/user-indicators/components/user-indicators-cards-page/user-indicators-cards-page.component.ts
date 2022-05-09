import {Component, OnDestroy} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';
import {UserSharedDataUserProvidersService} from '../../../user-shared/services';
import {Subscription} from 'rxjs';



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
    userId: string | undefined = '';
    public providers: any = [
        {
            status: true
        },
        {
            status: false
        },
        {
            status: true
        },
        {
            status: false
        }]
    private subscription: Subscription = new Subscription()
    constructor( private readonly userSharedDataUserProvidersService: UserSharedDataUserProvidersService) {
        this.userId = this.getUserId()
        this.getProvidersData();
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


    getUserId() {
        const value = localStorage.getItem('card');
        if (value) {
            return value;
        }
        return undefined
    }
//отримання даних про вибраних провайдерів
    getProvidersData(): void {
        this.subscription.add(this.userSharedDataUserProvidersService.fetchProviders(this.userId)
            .subscribe( (data: any) => {
                    console.log(data)
                },
                error => {
                    console.log(error);
                }))
    }

     onSubmit(): void {
         if(this.indicatorsForm.valid) {
             this.subscription.add(this.userSharedDataUserProvidersService.sendIndicators(
                 this.indicatorsForm.value, this.userId
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
