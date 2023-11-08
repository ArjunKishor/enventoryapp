import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login/sevice/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  var s = new LoginService().isLoggedIn ;
  // return s 
  // ? true : false;
  return true;
};
