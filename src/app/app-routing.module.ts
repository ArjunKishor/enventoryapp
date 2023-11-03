import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent
  },
  { path: 'rooms', component: RoomsComponent },
  
  { path: 'rooms/add', component: RoomAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rooms/:roomId', component: RoomBookingComponent },
  //  all paths should be declared above the wildcard route
  { path: '', redirectTo: 'rooms', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
