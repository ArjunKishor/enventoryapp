import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn: boolean = false;
  constructor() { }

  Login(email: string, password: string) {
    if(email == 'shaheer@gmail.com' && password == 'shaheer'){
      return this.isLoggedIn = true;
            
    }
    else if(email == 'hassan@gmail.com' && password == 'hassan'){
    return this.isLoggedIn = true;

    }else{
return this.isLoggedIn = false;
    }
  }
}
