import { Component, OnInit } from '@angular/core';
import { RoomsList } from '../rooms/room';
import { RoomsService } from '../rooms/service/rooms.service';
import { NgForm } from '@angular/forms';
import { TicketsModel } from '../rooms/tickets_model';

@Component({
  selector: 'ea-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent implements OnInit{
  sucessMessage: string = '';
rooms : RoomsList = {
  amenities: '',
  roomsType: '',
  roomNumber: '',
  photos: '',
  price: 0,
  rating: 5,
  checkIn: new Date('2019-01-16'),
  checkOut: new Date('2019-01-18'),
}

AddRooms(roomsForm : NgForm) {
this.roomService.addRooms(this.rooms).subscribe((data) => {
  this.sucessMessage = 'Room Added Successfully';
  console.log(data)});
  roomsForm.resetForm({
    amenities: '',
    roomsType: '',
    roomNumber: '',
    photos: '',
    price: 0,
    rating: 5,
    checkIn: new Date('2019-01-16'),
    checkOut: new Date('2019-01-18'),
  
  });
}
constructor(private roomService: RoomsService) {  
  
}
  ngOnInit(): void {
    this.data = [
      {
          "employeeCode": "EMP007",
          "guid": 16,
          "employeeName": "Madni Raza",
          "ticketId": 1,
          "subject": "string",
          "departmentName": "App Development",
          "assigneeName": "Madni Raza",
          "type": "string",
          "createdOn": "Jan 12 2024  3:27PM",
          "priority": "string",
          "status": "Open"
      },
      {
          "employeeCode": "EMP007",
          "guid": 16,
          "employeeName": "Madni Raza",
          "ticketId": 14,
          "subject": "test",
          "departmentName": "App Development",
          "assigneeName": "Madni Raza",
          "type": "test",
          "createdOn": "Feb  6 2024  5:39PM",
          "priority": "test",
          "status": "Approved"
      }
    ];
  }
onTap(value: any){}
data?:TicketsModel [] = [];
columns: string[] = [
  'employeeCode',
  'employeeName',
  'ticketId',
  'subject',
  'departmentName',
  'assigneeName',
  'type',
  'createdOn',
  'priority',
  'status',
];
}
