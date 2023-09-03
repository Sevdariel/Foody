import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(
    public accountService: AccountService,
    private router: Router) { }

  public logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/landing-page');
  }
}
