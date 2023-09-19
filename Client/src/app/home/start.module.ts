import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StartRoutingModule } from './start-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StartRoutingModule,
    ReactiveFormsModule,
  ],
})
export class StartModule { }
