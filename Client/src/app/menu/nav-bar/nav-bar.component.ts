import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  model: any = {};
  public loginFormGroup: FormGroup;
  
  constructor(formBuilder: FormBuilder) {
    this.loginFormGroup = formBuilder.group({
      login: new FormControl(),
      password: new FormControl(),
    });
  }

  public login () {
    console.log(this.model);
  }
}
