import { Injectable } from '@angular/core';
import {secretkey} from '../constant/routeConst'
// import {cryptService} from '../services/cryptoservice'
@Injectable(
    {
        providedIn: 'root'
    }
)
export class LocalStorageService {
    // constructor(private cryptoservice: cryptService) {
    //  }
    
    secretkey:string=secretkey 
    set(key: string, value: any) {
        try {
            localStorage.setItem(secretkey, JSON.stringify(value));
        } catch (err) {
            console.error('Error while setting local storage', err);
        }
    }
    get(key: string) {
        try {
            let userName: any = localStorage.getItem(secretkey);
            let user = JSON.parse(userName);
        }
        catch (err) {
            console.error('Error while getting data from local storage', err);
        }
    }
}