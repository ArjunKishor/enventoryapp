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
import { TableComponent } from "../../table/table.component";


@NgModule({
    declarations: [
        RoomsComponent,
        RoomsListComponent,
        RoomAddComponent,
        RoomBookingComponent,
        EmployeeComponent,
    ],
    providers: [
        { provide: RouteConfigToken,
            useValue: { title: 'Rooms' } }
    ],
    imports: [
        CommonModule,
        RoomsRoutingModule,
        FormsModule,
        TableComponent
    ]
})
export class RoomsModule {
  constructor(){
  //  console.log('Rooms Module Loaded');
    console.log('Rooms Module Loaded');
  }
}
