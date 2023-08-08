import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialLoaderModule } from '../material-loader/material-loader.module';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MaterialLoaderModule,
  ],
  exports: [
    NavBarComponent,
  ],
})
export class MenuModule { }
