import {Component} from '@angular/core';

@Component({
    selector: 'app-user-shared-floating-alert',
    templateUrl: './user-shared-floating-alert.component.html',
    styleUrls: ['./user-shared-floating-alert.component.css']
})
export class UserSharedFloatingAlertComponent  {
    isAlertOpen  = false;
    isAlertOpenProgress  = false;
    error  = false;
    massage = 'Показники надіслані!';

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
}
