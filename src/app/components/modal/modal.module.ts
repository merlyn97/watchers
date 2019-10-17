import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { BoxModule } from '../box/box.module';
import { ImgModule } from '../img/img.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule, BoxModule, 
    ImgModule, 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCODGCkk998Ej7WCuo4QJNVQ9dpqizXriQ'
    })
  ],
  exports: [ModalComponent],
  entryComponents: [ModalComponent]
})
export class ModalModule { }
