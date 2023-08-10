import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private loggedIn: boolean = true;

  constructor() { }

  public logIn() {
    this.loggedIn = true;
  }

  public logOut() {
    this.loggedIn = false;
  }

  public isLogIn(): boolean {
    return this.loggedIn;
  }
}
