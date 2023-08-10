import { IUserDto } from './../../shared/account/login-dto.model';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, filter, map, takeUntil } from 'rxjs';
import { AccountService } from 'src/app/shared/account/account.service';
import { ILoginDto } from 'src/app/shared/account/login-dto.model';
import { NavBarService } from './../../shared/nav-bar/nav-bar.service';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.scss']
})
export class NavBarLoginComponent {

  public loginFormGroup: FormGroup;
  private destroyed$ = new Subject();

  constructor(
    public navBarService: NavBarService,
    private accountService: AccountService,
    formBuilder: FormBuilder,
  ) {
    this.loginFormGroup = formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  public login() {
    const loginDto: ILoginDto = {
      password: this.loginFormGroup.get('password')?.value,
      username: this.loginFormGroup.get('username')?.value,
    };

    this.accountService.login(loginDto)
      .pipe(
        takeUntil(this.destroyed$),
      )
      .subscribe({
        next: response => {
          console.log(response);
          this.navBarService.logIn();
        },
        error: error => console.log(error),
        complete: () => { }
      });
  }

  public logout() {
    this.navBarService.logOut();
  }
}
