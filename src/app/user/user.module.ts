import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    UserComponent,
    SideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
