import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from '../rooms.component';
import { RoomBookingComponent } from 'src/app/room-booking/room-booking.component';
import { RoomAddComponent } from 'src/app/room-add/room-add.component';

const routes: Routes = [
  
  { path: '', component: RoomsComponent ,children:[
    { path: 'add', component: RoomAddComponent },
// { path: ':roomId', component: RoomBookingComponent },
  ]},
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
