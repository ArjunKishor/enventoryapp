import { Component } from '@angular/core';
import { RoomsList } from '../rooms/room';
import { RoomsService } from '../rooms/service/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ea-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent {
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
}
