import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {secretkey} from '../../constant/routeConst'

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {
  constructor(private router: Router){}
  secretkey:string=secretkey
  
   userName:any = localStorage.getItem(secretkey);
   user=JSON.parse(this.userName);
  signOut(){
    localStorage.removeItem('loggedIn');
    localStorage.removeItem(secretkey)
    this.router.navigate(['/login']);
}
}
