import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { secretkey } from 'src/app/constant/routeConst';
// import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // tokenFromUI: string = 'parse123@gkko'; //This is our key
  errormessage: string = ""
  submitted = false;  
  constructor(private router: Router, private fb: FormBuilder,public authService: AuthService, public LocalStorageService:LocalStorageService, ) {    
  }
  ngOnInit(): void {
    console.log(localStorage.getItem(secretkey))
    localStorage.getItem(secretkey) ? (this.router.navigate(['/dashboard'])): '';
    this.validation() //Page load hoen sse pehle ye initialize hota hai, form ko check krke load krega.
  }
  user: FormGroup = this.fb.group({}); //Make a formgroup named as user. 
  secretkey:string =secretkey
  validation() {
    this.user = this.fb.group({
      user_email: ["", [Validators.required, Validators.email],],
      user_password: ["", [Validators.required, Validators.maxLength(15), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!.%*?&])[A-Za-z\d$@$!%*?&].{7,}$')]],
    })
  }
  get myForm() {
    return this.user.controls;
  }
  onSubmit() {
    this.submitted = true;
    let userName = "abhinav@gmail.com"
    let password = "Abhinav@15"
    // console.log("check submit data", this.user.value);
    // console.log("check submit data", this.user.value.user_email);
    // console.log("check submit data", this.user.value.user_password);
    // console.log("check submit data", this.user.controls);
    if (this.user.valid && this.user.value.user_email == userName && this.user.value.user_password == password) {
      // localStorage.clear();
      this.LocalStorageService.set(secretkey, this.user.value);
      // localStorage.setItem("accessToken", JSON.stringify(this.user.value));
      // this.authService.logInUser(this.user.value.user_email, this.user.value.user_password)
      this.authService.setLoginStatus(true);
      this.router.navigate(['/dashboard'])
    }
    else {
      if(this.user.value.user_email  && this.user.value.user_password )
      this.errormessage = "check username and password"
    }
  }
}