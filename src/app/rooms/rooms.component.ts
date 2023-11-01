import { AfterViewInit, Component, Input, OnChanges,  OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './service/rooms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ea-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit,OnChanges, AfterViewInit {
  
  // hotelName = 'Hotel California';  
  title = 'Rooms List';
  numRooms = 10;  
  selectRoomVar! : RoomsList;

stream = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);

  // setTimeout(() => {
  //   observer.next(4);
    observer.complete();
  // }, 1000);

  observer.error('error');
});

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

  
  rooms : Room = {
    totalRooms: 1,
    availableRooms: 5,
    bookedRooms: 100
  };
  
  hideHotel = true;
  hideHotelName() {
    this.hideHotel = !this.hideHotel;
    this
  }

  deleteRooms() {
    this.numRooms--;
    this.rooms.availableRooms--;
  }
editRooms() {
  this.roomService.editRooms(this.selectRoomVar).subscribe((data) => {this.rooList = data;});

}

deleteRooms1() {
  this.roomService.deleteRooms(this.selectRoomVar.roomNumber!).subscribe((data) => {this.rooList = data;});
}
  addRoomsObject() {
    // const rooms: RoomsList =  {
    //   roomNumber : "1",
    //   amenities: 'Never Alone',
    //   checkIn: new Date('2019-01-16'),
    //   checkOut: new Date('2019-01-18'),
    //   photos:  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //   price: 1293,
    //   roomsType: 'double ',
    //   rating: 89.099090990 ,
    // }
    // this.roomsList.push(rooms);
    // this.roomsList = [...this.roomsList, rooms];
 this.roomService.addRooms(this.selectRoomVar).subscribe((data) => {this.rooList = data;});
    // console.log('RoomsComponent');
  }

  @ViewChild(HeaderComponent,{static :false}) headerComponent!: HeaderComponent;
  // @ViewChildren(HeaderComponent) headerChildrenComponent: HeaderComponent[] = [];
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent> ;

// roomService = new RoomsService();

  constructor(
    private roomService: RoomsService
  ) { 

    }
  // ngOnDestroy(): void {
  //   console.log('RoomsComponent Destroyed');
  // }
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    // this.headerComponent.title = 'Hotel California';
    this.stream.subscribe((data)=> console.log(data));
    this.stream.subscribe({next: (data)=> console.log("next"), error:
       (err)=> console.log("err"), complete: ()=> console.log('completed')});
    this.headerChildrenComponent.forEach((headerComponent) => {
      // headerComponent.title = 'Hotel California 1';
    } );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('RoomsComponent HEre ');
    console.log(changes);
  }
    @Input() rooList: RoomsList[] = [];
    ngOnInit() {
      this.roomService.getRooms().subscribe((roomsList) => {this.rooList = roomsList;});
      console.log('RoomsComponent');
      console.log(this.headerComponent);
      // this.roomService.getPhotos().subscribe((data) => {console.log(data);});
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
         json;
        console.log(json)});    // <-- print here
    ;

    }

}
