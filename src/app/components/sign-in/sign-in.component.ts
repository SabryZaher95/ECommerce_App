import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  isLoading: boolean = false;
  errorMsg: string = '';

  constructor(private _auth: AuthService, private _formBuilder: FormBuilder, private _Router: Router){}

  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  login(form: FormGroup){
    if(form.valid){
      this.isLoading = true;
      this._auth.signIn(form.value).subscribe({
        next: res => {
          console.log(res);
          this._Router.navigate(['/home']);
          this.isLoading = false;
        },
        error: err => {
          console.log(err);
          if(err.status == 401){
            this.errorMsg = err.error.message;
          }else{
            this.errorMsg = err.error.errors.msg;
          }
          this.isLoading = false
        }
      })
    }
    else{
      this.isLoading = false;
    }
  }
}
