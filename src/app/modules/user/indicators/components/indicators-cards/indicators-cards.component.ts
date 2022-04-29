import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-indicators-cards',
    templateUrl: './indicators-cards.component.html',
    styleUrls: ['./indicators-cards.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => IndicatorsCardsComponent),
            multi: true
        }
    ]
})
export class IndicatorsCardsComponent implements ControlValueAccessor {
    @Input() value = '';
    @Input() title = '';

    constructor() { }

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
