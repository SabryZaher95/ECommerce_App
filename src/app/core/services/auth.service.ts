import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SignUp } from '../interfaces/sign-up';
import { SignIn } from '../interfaces/sign-in';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  signUp(data: SignUp): Observable<any>{
    return this._http.post(environment.baseUrl + 'api/v1/auth/signup', data);
  }

  signIn(data: SignIn): Observable<any>{
    return this._http.post(environment.baseUrl + 'api/v1/auth/signin', data);
  }
}
