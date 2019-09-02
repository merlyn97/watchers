import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { MenuBarModule } from '../menu-bar/menu-bar.module';
import { BoxModule } from '../box/box.module';
import { ModalModule } from '../modal/modal.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const router = [
  {
    path: '',
    component: DashboardComponent,
    children: []
  }
];


@NgModule({
  declarations: [ DashboardComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(router), 
    NavbarModule, 
    MenuBarModule, 
    BoxModule, 
    ModalModule,
    NgbModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
