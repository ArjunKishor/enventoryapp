import { NgModule, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app_config/appconfig_service';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { RoomsModule } from './rooms/rooms/rooms.module';
import { RouteConfigToken } from './config/routeConfig.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    HeaderComponent,
    ContainerComponent,
    AppNavComponent,
    NotFoundComponent,
    
    LoginComponent,
    HoverDirective,
    

  ],
  imports: [
    BrowserModule,RouterModule,
    AlertModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    // RoomsModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG, 

  }, {
    provide: RouteConfigToken,
    useValue: {title: 'Home'},
  }],
  bootstrap: [AppComponent] 
})
export class AppModule{

 }
