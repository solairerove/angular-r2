import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../material/material.module';
import {UserCardComponent} from './user-card/user-card.component';
import {UserComponent} from './user.component';
import {UserRoutingModule} from './user.routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ],
  providers: [],
})
export class UserModule {

}
