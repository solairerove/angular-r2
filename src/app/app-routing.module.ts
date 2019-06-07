import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule), // new dynamic import method
  },
  {
    path: 'users/:id',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule), // new dynamic import method
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
