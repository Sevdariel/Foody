import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, tap } from 'rxjs';
import { ILoginDto, IRegisterDto, IUser } from './account-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSource = new BehaviorSubject<IUser | null>(null);
  public currentUser$ = this.currentUserSource.asObservable();

  private readonly baseUrl: string = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) { }

  public login(loginDto: ILoginDto) {
    return this.httpClient.post<IUser>(this.baseUrl + 'account/login', loginDto)
      .pipe(
        filter(loggedUser => !!loggedUser),
        tap(loggedUser => this.saveUserToken(loggedUser)),
      );
  }

  public register(registerDto: IRegisterDto) {
    return this.httpClient.post<IUser>(this.baseUrl + 'account/register', registerDto)
      .pipe(
        filter(registeredUser => !!registeredUser),
        tap(registeredUser => this.saveUserToken(registeredUser))
      );
  }

  public logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  public setCurrentUser(user: IUser) {
    this.currentUserSource.next(user);
  }

  private saveUserToken(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user.token));
    this.currentUserSource.next(user);
  }
}
