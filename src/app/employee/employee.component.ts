import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'ea-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent  implements OnInit{
constructor( @Self() private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomsService.getRooms();
}
employeeName = 'Rajesh';
employeeAge = 30;
}
