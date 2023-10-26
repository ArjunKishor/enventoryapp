import { Component, OnInit } from '@angular/core';
import { Room } from './room';

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
  }
  rooms : Room = {
    totalRooms: 1,
    // availableRooms: 10,
    bookedRooms: 100
  };
  
  hideHotel = false;
  hideHotelName() {
    this.hideHotel = !this.hideHotel;
  }

  deleteRooms() {
    // this.rooms.availableRooms--;
  }
  constructor() { 

    }
    ngOnInit() {
      console.log('RoomsComponent');
    }

}
