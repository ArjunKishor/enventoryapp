import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './sevice/login.service';

@Component({
  selector: 'ea-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
user : string = '';
email : string = '';
password : string = '';
login() {
  if(this.loginService.Login(this.email,this.password)){
    this.user = 'shaheer';
    alert('Login Successful `this.user`');
    this.route.navigate(['/rooms']); 

  }else{
    alert('Invalid Credentials');
  }
}

  constructor(private route: Router, private loginService:LoginService) {

   }
}
