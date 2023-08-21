import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component';
import { BootstrapLoaderModule } from '../bootstrap-loader/bootstrap-loader.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    NavBarLoginComponent
  ],
  imports: [
    BootstrapLoaderModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
  ],
})
export class MenuModule { }
