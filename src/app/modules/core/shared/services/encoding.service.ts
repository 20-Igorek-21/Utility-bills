import {Inject, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EncodingService {

    constructor(@Inject(Window) private readonly window: Window) { }

    public encode(value: string): string {
        return this.window.btoa(value)
    }

    public decode(value: string): string {
        return this.window.atob(value)
    }
}
