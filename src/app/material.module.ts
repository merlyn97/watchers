import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
    ],
})
export class MaterialModule {}