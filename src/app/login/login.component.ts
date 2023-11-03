import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  if(this.email == 'shaheer@gmail.com' && this.password == 'shaheer'){
    this.user = 'shaheer';
    alert('Login Successful');

  }
  else if(this.email == 'hassan@gmail.com' && this.password == 'hassan'){
    this.user = 'hassan';
    alert('Login Successful');
    this.route.navigate(['/rooms', 'add']);
  }else{
    alert('Invalid Credentials');
  }
}

  constructor(private route: Router) { }
}
