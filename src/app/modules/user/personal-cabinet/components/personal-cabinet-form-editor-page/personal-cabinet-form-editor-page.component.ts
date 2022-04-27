import {Component, OnDestroy } from '@angular/core';
import { UserSharedFetchAccountService } from '../../../user-shared/services';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-personal-cabinet-form-editor-page',
    templateUrl: './personal-cabinet-form-editor-page.component.html',
    styleUrls: ['./personal-cabinet-form-editor-page.component.css']
})
export class PersonalCabinetFormEditorPageComponent implements OnDestroy {

    public cards: IUserAccount []= []
    private subscription: Subscription = new Subscription()

    constructor(private readonly userSharedFetchAccountService: UserSharedFetchAccountService) {
        this.fetchData()
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    fetchData() {
        this.subscription.add(this.userSharedFetchAccountService.fetshAccount()
            .subscribe( (data: IUserAccount[]) => {
                this.cards = data
            }))
    }

    public massageText = true;
    public isShowEditorForm = true;

    public onShowEditorForm(): void {
        this.isShowEditorForm = false;
    }

    public isCloseEditorForm(): void {
        this.isShowEditorForm = true;
    }
}
