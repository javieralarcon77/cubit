import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { UserComponent } from './pages/user/user.component';


const routes: Routes = [
  {
    path:'list-user',
    loadChildren: () => import('./pages/list-user/list-user.module').then(m => m.ListUserModule)
  },
  {
    path:'user/:id',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: 'list-user',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
