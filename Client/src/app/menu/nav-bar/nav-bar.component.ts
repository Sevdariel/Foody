import { Component } from '@angular/core';
import { AccountService } from 'src/app/shared/account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(public accountService: AccountService) { }

  public onShown() {
    console.log('on shown')
  }
}
