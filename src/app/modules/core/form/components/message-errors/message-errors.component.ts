import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MIN_LENGTH_SYMBOL } from '../../../../../constants';

@Component({
    selector: 'app-message-errors',
    templateUrl: './message-errors.component.html',
    styleUrls: ['./message-errors.component.css']
})
export class MessageErrorsComponent {

    @Input()
    public controlsName!: AbstractControl | null;

    public readonly minLengthSymbol = MIN_LENGTH_SYMBOL

}
