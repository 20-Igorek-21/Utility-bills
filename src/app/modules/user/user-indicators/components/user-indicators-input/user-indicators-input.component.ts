import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IUserProviders} from "../../../user-shared/types/user-shared-provider.interface";

@Component({
    selector: 'app-user-indicators-input',
    templateUrl: './user-indicators-input.component.html',
    styleUrls: ['./user-indicators-input.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => UserIndicatorsInputComponent),
            multi: true
        }
    ]
})
export class UserIndicatorsInputComponent implements ControlValueAccessor {
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
