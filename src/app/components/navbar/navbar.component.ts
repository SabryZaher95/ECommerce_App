import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLoggedIn: boolean = false;
  constructor(private _auth:AuthService, private _Router:Router){
    this.checkLoggedIn();
  }

  checkLoggedIn(){
    this._auth.userData.subscribe({
      next: res => {
        console.log(res);
        if(this._auth.userData.getValue()){
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      },
      error: err => console.log(err)
    })
  }

  logout(){
    this._auth.logout();
  }

}
