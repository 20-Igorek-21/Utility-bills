import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';
import {finalize, Subscription} from 'rxjs';
import { UserSharedDataUserAccountService } from '../../../user-shared/services';

@Component({
    selector: 'app-user-personal-cabinet-form-editor-page',
    templateUrl: './user-personal-cabinet-form-editor-page.component.html',
    styleUrls: ['./user-personal-cabinet-form-editor-page.component.css']
})
export class UserPersonalCabinetFormEditorPageComponent implements OnDestroy {

    public massageText = true;
    public isShowEditorForm = true;
    public isLoader = true;
    public cards: IUserAccount []= []
    private subscription: Subscription = new Subscription()

    @Output() isLockEditorForm = new EventEmitter()
    @Output() isUnLockEditorForm = new EventEmitter()

    constructor(private readonly userSharedDataAccountService: UserSharedDataUserAccountService) {
        this.fetchData()
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    changeMessageFalse(value: boolean) {
        this.massageText = value
        console.log(this.massageText)
    }

    changeMessageTrue(value: boolean) {
        this.massageText = value
        console.log(this.massageText)
    }

    fetchData(): void {
        this.subscription.add(this.userSharedDataAccountService.fetshAccount()
            .pipe( finalize( () => {
                this.isLoader = false;
            }))
            .subscribe( (data: IUserAccount[]) => {
                console.log(data)
                this.cards = data
            },
            error => {
                console.log(error)
            }))

    }

    public onShowEditorForm(): void {
        this.isShowEditorForm = false;
        this.isLockEditorForm.emit(false);
    }

    public isCloseEditorForm(): void {
        this.isShowEditorForm = true;
        this.isUnLockEditorForm.emit(true);
    }
}
