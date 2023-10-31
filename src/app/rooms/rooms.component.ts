import { AfterViewInit, Component, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './room';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'ea-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit,OnChanges, AfterViewInit {
  
  hotelName = 'Hotel California';  
  title = 'Rooms List';
  numRooms = 10;  
  selectRoomVar! : RoomsList;



  addRooms() {
    this.numRooms++;
    this.rooms.availableRooms++;
    this.title = 'Rooms List Which is Changed';
  }
  selectedRoom(room: RoomsList){
    console.log("room selected");
    console.log(room);
    this.selectRoomVar = room;
    
    this.numRooms++;
    this.rooms.availableRooms++;
    
  };
  roomsList: RoomsList[] = [  {
    amenities: 'Free Wifi',
    checkIn: new Date('2019-01-16'),
    checkOut: new Date('2019-01-18'),
    image:  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 100,
    roomsType: 'Single',
    rating: 3 ,
  
  },
    {
    amenities: 'Free Wifi',
    checkIn: new Date('2019-01-16'),
    checkOut: new Date('2019-01-18'),
    image:  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 100,
    roomsType: 'Single',
    rating: 2.92889 ,
  
  },
   {
    amenities: 'Free Wifi',
    checkIn: new Date('2019-01-16'),
    checkOut: new Date('2019-01-18'),
    image:  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    price: 100,
    roomsType: 'Single',
    rating: 4.099090990 ,
  },
  
   
  ];
  
  rooms : Room = {
    totalRooms: 1,
    availableRooms: 5,
    bookedRooms: 100
  };
  
  hideHotel = false;
  hideHotelName() {
    this.hideHotel = !this.hideHotel;
    this
  }

  deleteRooms() {
    this.numRooms--;
    this.rooms.availableRooms--;
  }

  addRoomsObject() {
    const rooms: RoomsList =  {
      amenities: 'Never Alone',
      checkIn: new Date('2019-01-16'),
      checkOut: new Date('2019-01-18'),
      image:  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      price: 1293,
      roomsType: 'double ',
      rating: 89.099090990 ,
    }
    // this.roomsList.push(rooms);
    this.roomsList = [...this.roomsList, rooms];
    console.log('RoomsComponent');
  }

  @ViewChild(HeaderComponent,{static :false}) headerComponent!: HeaderComponent;
  // @ViewChildren(HeaderComponent) headerChildrenComponent: HeaderComponent[] = [];
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent> ;

  constructor() { 

    }
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'Hotel California';
    this.headerChildrenComponent.forEach((headerComponent) => {
      headerComponent.title = 'Hotel California 1';
    } );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('RoomsComponent HEre ');
    console.log(changes);
  }
    @Input() rooList: RoomsList[] = [];
    ngOnInit() {
      console.log('RoomsComponent');
      console.log(this.headerComponent);

    }

}
