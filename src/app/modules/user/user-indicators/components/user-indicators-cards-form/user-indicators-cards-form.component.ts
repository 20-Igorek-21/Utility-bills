import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { IUserProviders } from '../../../user-shared/types/user-shared-provider.interface';
import {finalize, Subscription} from 'rxjs';
import { UserSharedDataUserProvidersService } from '../../../user-shared/services';
import {FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';
import { UserSharedFloatingAlertComponent } from '../../../user-shared/components';

@Component({
    selector: 'app-user-indicators-cards-form',
    templateUrl: './user-indicators-cards-form.component.html',
    styleUrls: ['./user-indicators-cards-form.component.css']
})
export class UserIndicatorsCardsFormComponent implements OnInit, OnDestroy {

    public ispProgressBar = true;
    userId: string | undefined = '';
    public providers: IUserProviders[] = [];
    @ViewChild('openAlert')
    public openAlert!: UserSharedFloatingAlertComponent;
    private subscription: Subscription = new Subscription()

    constructor( private readonly userSharedDataUserProvidersService: UserSharedDataUserProvidersService) {}

    ngOnInit(): void {
        this.userId = this.getUserId()
        this.getProvidersData();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    indicatorsForm: FormGroup = new FormGroup({
        gasIndicator: new FormControl<string>('', [Validators.required]),
        energyIndicator: new FormControl<string>('', [Validators.required]),
        tecIndicator: new FormControl<string>('', [Validators.required]),
        waterIndicatorCold: new FormControl<string>('', [Validators.required]),
        waterIndicatorHot: new FormControl<string>('', [Validators.required]),
    })

    getUserId(): string | undefined {
        const value = sessionStorage.getItem('card');
        if (value) {
            return value;
        }
        return undefined
    }

    getProvidersData(): void {
        this.subscription.add(this.userSharedDataUserProvidersService.fetchProviders(this.userId)
            .pipe( finalize( () => {
                this.ispProgressBar = false;
            }))
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
        if(this.indicatorsForm.valid) {
            this.subscription.add(this.userSharedDataUserProvidersService.sendIndicators(
                this.indicatorsForm.value, this.userId
            ).subscribe( () => {
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
            this.openAlert.massage = 'Помилка! Поля не заповнені!'
            this.openAlert.showNotification();
        }
    }
}
