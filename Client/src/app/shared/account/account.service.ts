import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginDto, IUserDto } from './login-dto.model';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSource = new BehaviorSubject<IUserDto | null>(null);
  public currentUserSource$ = this.currentUserSource.asObservable();

  private readonly baseUrl: string = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) { }

  public login(loginDto: ILoginDto) {
    return this.httpClient.post<IUserDto>(this.baseUrl + 'account/login', loginDto).pipe(
      filter(loggedUser => !!loggedUser),
      map(loggedUser => {
        localStorage.setItem('user', JSON.stringify(loggedUser.token));
        this.currentUserSource.next(loggedUser);
      }),
    );
  }

  public logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
