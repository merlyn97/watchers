import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { BoxModule } from '../box/box.module';
import { ImgModule } from '../img/img.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule, BoxModule, ImgModule
  ],
  exports: [ModalComponent],
  entryComponents: [ModalComponent]
})
export class ModalModule { }
