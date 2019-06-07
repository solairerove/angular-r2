import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {SharedModule} from '../shared/shared.module';
import {UserListDetailsComponent} from './user-list-details/user-list-details.component';
import {UserListComponent} from './user-list.component';
import {UserListRoutingModule} from './user-list.routing.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserListDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    UserListRoutingModule
  ],
  providers: [],
})
export class UserListModule {

}
