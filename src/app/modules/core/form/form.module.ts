import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { formComponents } from './components';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [
        ...formComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        NgxMaskModule,
    ],
    exports: [
        ...formComponents
    ]
})
export class FormModule { }
