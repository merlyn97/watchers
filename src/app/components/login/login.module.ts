import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

const router = [
    {
      path: '',
      component: LoginComponent,
      children: []
    }
  ];
@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        MaterialModule,ReactiveFormsModule,FormsModule
        
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {}