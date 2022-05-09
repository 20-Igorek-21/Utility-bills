import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IUserAccountProviders} from "../../../user-shared/types/user-shared-account.interface";
import {IUserProviders} from "../../../user-shared/types/user-shared-provider.interface";

@Component({
    selector: 'app-user-indicators-cards',
    templateUrl: './user-indicators-cards.component.html',
    styleUrls: ['./user-indicators-cards.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => UserIndicatorsCardsComponent),
            multi: true
        }
    ]
})
export class UserIndicatorsCardsComponent implements ControlValueAccessor {
    @Input() provider!: IUserProviders;
    @Input() value = '';
    @Input() title = '';
    @Input() itemIcon = '';

    constructor() {
    }

    handleInput(value: string) {
        this.onChange(value)
    }

    writeValue(value: string): void {
        this.value = value
    }
    onChange!: (value: string) => void;
    onTouched!: ()=> void;

    registerOnChange(fn: any): void {
        this.onChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn
    }
}
