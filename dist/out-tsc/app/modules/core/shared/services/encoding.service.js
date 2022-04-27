import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
let EncodingService = class EncodingService {
    constructor(window) {
        this.window = window;
    }
    encode(value) {
        return this.window.btoa(value);
    }
    decode(value) {
        return this.window.atob(value);
    }
};
EncodingService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(Window))
], EncodingService);
export { EncodingService };
//# sourceMappingURL=encoding.service.js.map