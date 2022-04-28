import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { IUserAccount } from '../../../user-shared/types/user-shared-account.interface';
import { Subscription } from 'rxjs';
import { UserSharedFetchAccountService } from '../../../user-shared/services';

@Component({
    selector: 'app-user-personal-cabinet-form-editor-page',
    templateUrl: './user-personal-cabinet-form-editor-page.component.html',
    styleUrls: ['./user-personal-cabinet-form-editor-page.component.css']
})
export class UserPersonalCabinetFormEditorPageComponent implements OnDestroy {

    public cards: IUserAccount []= []
    private subscription: Subscription = new Subscription()
    @Output() isLockEditorForm = new EventEmitter()
    @Output() isUnLockEditorForm = new EventEmitter()

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
        this.isLockEditorForm.emit(false)
    }

    public isCloseEditorForm(): void {
        this.isShowEditorForm = true;
        this.isUnLockEditorForm.emit(true)
    }
}
