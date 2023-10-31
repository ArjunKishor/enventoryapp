import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'ea-root',
  templateUrl: './app.component.html',
  // template:`<h1>{{title}}</h1><p>hi</p>`,
  styleUrls: ['./app.component.scss']
  // styles:[`h1{color:red;}`]
})
export class AppComponent implements  OnInit {
  title = 'enventoryapp';
  role = 'admin';

  ngAfterViewInit(): void {
    const comRef = this.vcr.createComponent(RoomsComponent);
    comRef.instance.title = 'Rooms List In app Component using ViewContainerRef';
  }
  
  @ViewChild('user',{read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild( 'name',{static:true}) name!: ElementRef;

  ngOnInit(){
    this.name.nativeElement.value = 'Rajeshjdhsadhfgsahdghsagfg';
  }
}
