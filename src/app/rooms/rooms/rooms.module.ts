import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { RoomBookingComponent } from 'src/app/room-booking/room-booking.component';
import { RoomAddComponent } from 'src/app/room-add/room-add.component';
import { RoomsListComponent } from 'src/app/rooms-list/rooms-list.component';
import { RoomsComponent } from '../rooms.component';
import { FormsModule } from '@angular/forms';
import { RouteConfigToken } from 'src/app/config/routeConfig.service';


@NgModule({
  declarations: [
    
    RoomsComponent,
    RoomsListComponent,
    RoomAddComponent,
    RoomBookingComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule
  ],
  providers: [
    {provide:RouteConfigToken,
    useValue:{title:'Rooms'}}
  ]
})
export class RoomsModule {
  constructor(){
  //  console.log('Rooms Module Loaded');
    console.log('Rooms Module Loaded');
  }
}
