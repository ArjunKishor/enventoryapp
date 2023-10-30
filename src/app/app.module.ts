import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ClassComponent,
    RoomsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
