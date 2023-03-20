import { Injectable } from '@angular/core';


@Injectable({
  providedIn : 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || ('false'));

  setLoginStatus(value:boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }
  get LoginStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') || 
    this.loggedInStatus.toString());
    console.log(this.loggedInStatus);
    
  }
//   logInUser(email: string, password: string) {
//     return true
// }
}
