import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
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
        map(loggedUser => {
          localStorage.setItem('user', JSON.stringify(loggedUser.token));
          this.currentUserSource.next(loggedUser);
        }),
      );
  }

  public register(registerDto: IRegisterDto) {
    return this.httpClient.post<IRegisterDto>(this.baseUrl + 'account/register', registerDto);
  }

  public logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  public setCurrentUser(user: IUser) {
    this.currentUserSource.next(user);
  }
}
