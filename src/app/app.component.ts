import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';
import { ConfigService } from './config/config.service';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

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
// this.router.events.subscribe((data)=>{
//   console.log(data);
// });
this.router.events.pipe(
  filter((data)=> data instanceof NavigationStart)
).subscribe((event)=>{
  console.log(event);
  console.log("Navigation Start");
});
this.router.events.pipe(
  filter((data)=> data instanceof NavigationEnd)
).subscribe((event)=>{
  console.log(event);
  console.log("Navigation End");
});

    const comRef = this.vcr.createComponent(RoomsComponent);
    comRef.instance.title = 'Rooms List In app Component using ViewContainerRef';
  }
  
  @ViewChild('user',{read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild( 'name',{static:true}) name!: ElementRef;

  ngOnInit(){

    this.name.nativeElement.innertext = 'Rajeshjdhsadhfgsahdghsagfg';
    this.localStorge.setItem('name','Rajesh');
  }

  constructor(  
  @Inject(LocalStorageToken) private localStorge: Storage,
  private configService:ConfigService,
  private router:Router,
  ) { }
}
