import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component';
import { BootstrapLoaderModule } from '../bootstrap-loader/bootstrap-loader.module';

@NgModule({
  declarations: [
    NavBarComponent,
    NavBarLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapLoaderModule,
  ],
  exports: [
    NavBarComponent,
  ],
})
export class MenuModule { }
