import { Component, Input, OnInit } from '@angular/core';
import { Room, RoomsList } from './room';

@Component({
  selector: 'ea-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  
  hotelName = 'Hotel California';  
  numRooms = 10;  
  addRooms() {
    this.numRooms++;
    this.rooms.availableRooms++;
  }
  rooms : Room = {
    totalRooms: 1,
    availableRooms: 5,
    bookedRooms: 100
  };
  
  hideHotel = false;
  hideHotelName() {
    this.hideHotel = !this.hideHotel;
  }

  deleteRooms() {
    this.numRooms--;
    this.rooms.availableRooms--;
  }

  

  
  constructor() { 

    }
    @Input() rooList: RoomsList[] = [];
    ngOnInit() {
      console.log('RoomsComponent');
    }

}
