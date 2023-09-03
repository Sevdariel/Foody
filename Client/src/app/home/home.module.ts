import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule { }
