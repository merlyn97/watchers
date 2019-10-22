import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
    ],
})
export class MaterialModule {}