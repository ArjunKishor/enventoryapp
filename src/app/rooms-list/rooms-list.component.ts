import { Component } from '@angular/core';
import { RoomsList } from '../rooms/room';

@Component({
  selector: 'ea-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  roosList: RoomsList[] = [  {
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
}
