import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/account/account.service';
import { IUser } from './shared/account/account-dto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Client';

  constructor(
    private accountService: AccountService,
  ) { }

  public ngOnInit(): void {
    this.setCurrentUser();
  }

  public setCurrentUser() {
    const loggedUser: IUser = JSON.parse(localStorage.getItem('user')!);

    if (!loggedUser)
      return;

    this.accountService.setCurrentUser(loggedUser);
  }
}
