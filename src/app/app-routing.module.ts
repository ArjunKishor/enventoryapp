import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent,canActivate:[loginGuard]
  },
  
  { path: 'login', component: LoginComponent },
  {path: 'rooms',
  loadChildren: 
  () => import('./rooms/rooms/rooms.module').then(m => m.RoomsModule),
  canActivate:[loginGuard],}
  //  all paths should be declared above the wildcard route 
  ,{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
  canActivate:[loginGuard], },
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
