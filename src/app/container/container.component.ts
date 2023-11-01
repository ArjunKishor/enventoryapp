import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'ea-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {

@ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  constructor(
    @Host() private roomsService: RoomsService
  ) { 

  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    this.employee.employeeName = 'Rajesh is not ';
  }

}
