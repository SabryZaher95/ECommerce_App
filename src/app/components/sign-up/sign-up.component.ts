import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  errorMsg: string = '';
  isLoading: boolean = false;
  isNotValidForm: boolean = false;

  constructor(private _authService:AuthService, private _Router:Router){}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    //password: new FormControl('', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')],),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)],),
    rePassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)],),
    phone: new FormControl('', [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')])
  })

  signup(form: FormGroup){
    if(form.valid){
      this.isLoading = true;
      this._authService.signUp(form.value).subscribe({
        next: res => {
          console.log(res)
          this.isLoading = false
          this._Router.navigate(['/login'])
        },
        error: err => {
          console.log(err);
          if(err.status == 409){
            this.errorMsg = err.error.message;
          }
          else{
            this.errorMsg = err.error.errors.msg;
          }
          this.isLoading = false
        }
      })
    }
    else{
      this.isNotValidForm = true;
    }
  }
}
