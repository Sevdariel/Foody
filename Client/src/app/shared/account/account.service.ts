import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginDto } from './login-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly baseUrl: string = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) { }

  public login(loginDto: ILoginDto) {
    return this.httpClient.post(this.baseUrl + 'account/login', loginDto);
  }
}
