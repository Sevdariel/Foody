import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialLoaderModule } from '../material-loader/material-loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component';

@NgModule({
  declarations: [
    NavBarComponent,
    NavBarLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialLoaderModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavBarComponent,
  ],
})
export class MenuModule { }
