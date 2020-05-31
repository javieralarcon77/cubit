import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { MaterialImportModule } from 'src/app/material-module';

const routes: Routes = [
    {
      path: '',
      component: UserComponent
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    MaterialImportModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent]
})
export class UserModule { }