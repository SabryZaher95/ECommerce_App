import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SignUp } from '../interfaces/sign-up';
import { SignIn } from '../interfaces/sign-in';
import jwtDecode from 'jwt-decode';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: BehaviorSubject<any> = new BehaviorSubject('');
  isLoggedIn: boolean = localStorage.getItem('UserToken')? true: false;

  constructor(private _http: HttpClient, private _Router:Router) {
    if(this.isLoggedIn){
      this.getUserData();
    }
  }

  getUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('UserToken'));
    let decoded = jwtDecode(encodedToken);
    console.log(decoded);
    this.userData.next(decoded);
  }

  signUp(data: SignUp): Observable<any>{
    return this._http.post(environment.baseUrl + 'api/v1/auth/signup', data);
  }

  signIn(data: SignIn): Observable<any>{
    return this._http.post(environment.baseUrl + 'api/v1/auth/signin', data);
  }

  logout(){
    localStorage.removeItem('UserToken');
    this.userData.next(null);
    this._Router.navigate(['/signin']);
  }

  checkLogIn():boolean{
    if(this.isLoggedIn){
      this._Router.navigate(['/home']);
      return true;
    }
    return false;
  }
}
