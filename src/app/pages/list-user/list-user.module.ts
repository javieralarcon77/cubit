import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user.component';
import { MaterialImportModule } from 'src/app/material-module';

const routes: Routes = [
    {
      path: '',
      component: ListUserComponent
    }
  ];

@NgModule({
  imports: [
    CommonModule,
    MaterialImportModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListUserComponent]
})
export class ListUserModule { }