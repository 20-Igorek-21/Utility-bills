import {Component, OnDestroy} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";
import {UserSharedDataUserProvidersService} from "../../../user-shared/services";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-user-indicators-cards-page',
    templateUrl: './user-indicators-cards-page.component.html',
    styleUrls: ['./user-indicators-cards-page.component.css']
})
export class UserIndicatorsCardsPageComponent implements OnDestroy {
    isProviderClose  = true;
    isAlertOpen  = false;
    isAlertOpenProgress  = false;
    error  = false;
    massage = 'Показники надіслані!';
    private subscription: Subscription = new Subscription()
    constructor( private readonly userSharedDataUserProvidersService: UserSharedDataUserProvidersService) {

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
     id: string = '87812366-2915-46dd-94e0-e809a4cdafca';


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
                this.error = !this.error;
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

    // showNotification() {
    //     this._snackBar.open('Показники відправлені!',  '', {
    //         horizontalPosition: 'end',
    //         verticalPosition: 'top',
    //         duration: 2500,
    //         panelClass: ["custom-style"]
    //     });
    // }

}
