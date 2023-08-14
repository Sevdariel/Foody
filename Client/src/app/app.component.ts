import { IUser } from './shared/account/account-dto.model';
import { AccountService } from 'src/app/shared/account/account.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Client';
  users: any;

  constructor(private httpClient: HttpClient,
    private accountService: AccountService,
  ) { }

  public ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  public getUsers() {
    this.httpClient.get('https://localhost:5001/api/users')
      .subscribe({
        next: response => this.users = response,
        error: error => console.log(error),
        complete: () => console.log('Request has been completed'),
      });
  }

  public setCurrentUser() {
    const loggedUser: IUser = JSON.parse(localStorage.getItem('user')!);

    if (!loggedUser)
      return;

    this.accountService.setCurrentUser(loggedUser);
  }
}
