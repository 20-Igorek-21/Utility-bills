import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IUserProviders} from '../../../user-shared/types/user-shared-provider.interface';
import {Subscription} from 'rxjs';
import {UserSharedDataUserProvidersService} from '../../../user-shared/services';
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@ngneat/reactive-forms';
import {UserSharedFloatingAlertComponent} from '../../../user-shared/components';

@Component({
    selector: 'app-user-indicators-cards-form',
    templateUrl: './user-indicators-cards-form.component.html',
    styleUrls: ['./user-indicators-cards-form.component.css']
})
export class UserIndicatorsCardsFormComponent implements OnInit, OnDestroy {

    userId: string | undefined = '';
    public providers: IUserProviders[] = []
    @ViewChild('openAlert')
    public openAlert!: UserSharedFloatingAlertComponent;
    private subscription: Subscription = new Subscription()
    constructor( private readonly userSharedDataUserProvidersService: UserSharedDataUserProvidersService) {}
    ngOnInit(): void {
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
        waterIndicatorCold: new FormControl<string>(),
        waterIndicatorHot: new FormControl<string>(),
        heatIndicator: new FormControl<string>(),
    })


    getUserId() {
        const value = localStorage.getItem('card');
        if (value) {
            return value;
        }
        return undefined
    }

    getProvidersData(): void {
        this.subscription.add(this.userSharedDataUserProvidersService.fetchProviders(this.userId)
            .subscribe( (data: IUserProviders[]) => {
                this.providers = data;
            },
            error => {
                this.openAlert.error = true;
                this.openAlert.massage = 'Помилка! Спробуйте оновити сторінку!'
                this.openAlert.showNotification();
            }))
    }

    onSubmit(): void {
        if(!this.indicatorsForm.invalid) {
            this.subscription.add(this.userSharedDataUserProvidersService.sendIndicators(
                this.indicatorsForm.value, this.userId
            ).subscribe( (res:object) => {

                this.openAlert.showNotification()
                this.indicatorsForm.reset();
            },
            error => {
                this.openAlert.error = true;
                this.openAlert.massage = 'Помилка! Спробуйте відправити ще раз!'
                this.openAlert.showNotification();
            }
            ))
        } else {
            this.openAlert.error = true;
            this.openAlert.massage = 'Помилка! Показники не надіслані!'
            this.openAlert.showNotification();
        }
    }
}
