import {Component, OnDestroy} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormControl} from "@ngneat/reactive-forms";
import {UserSharedDataUserAccountService, UserSharedDataUserProvidersService} from "../../../user-shared/services";
import {Subscription} from "rxjs";
import {
    IUserAccount,
    IUserAccountAddress,
    IUserAccountProvider
} from "../../../user-shared/types/user-shared-account.interface";


@Component({
    selector: 'app-user-indicators-cards-page',
    templateUrl: './user-indicators-cards-page.component.html',
    styleUrls: ['./user-indicators-cards-page.component.css']
})
export class UserIndicatorsCardsPageComponent implements OnDestroy {
    private subscription: Subscription = new Subscription()
    public userDate: IUserAccount[] = [];
    constructor(
        private readonly userSharedDataUserProvidersService: UserSharedDataUserProvidersService,
        private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {
        this.fetchDataUser();
        // this.providerData();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    fetchDataUser(): void {
        this.subscription.add(this.userSharedDataAccountService.fetchAccount()
            .subscribe( (data: IUserAccount[]) => {
                    this.userDate = data;
                    // console.log(this.userDate)
                },
                error => {
                    console.log(error)
                }))
    }

    providerData(): void {
        this.subscription.add(this.userSharedDataUserProvidersService.fetchProviders()
            .subscribe( (data: IUserAccountProvider[]) => {
                    console.log(data)
                },
                error => {
                    console.log(error)
                }))
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
                    alert('Показники відправлені')
                },
                error => {
                    console.log(error)
                }
            ))
            // this.userSharedDataUserProvidersService.sendIndicators( this.indicatorsForm.value,  this.id)
            //     .subscribe((res) => {
            //         console.log(res)
            //         alert('Показники відправлені')
            //     });
        this.indicatorsForm.reset();
        }
    }
}
