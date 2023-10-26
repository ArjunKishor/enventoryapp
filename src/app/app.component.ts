import { Component } from '@angular/core';

@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  // template:`<h1>{{title}}</h1><p>hi</p>`,
  styleUrls: ['./app.component.scss']
  // styles:[`h1{color:red;}`]
})
export class AppComponent {
  title = 'enventoryapp';
}
