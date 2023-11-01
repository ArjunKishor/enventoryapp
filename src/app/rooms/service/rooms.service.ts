import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../room';
import { APP_SERVICE_CONFIG } from 'src/app/app_config/appconfig_service';
import { AppConfig } from 'src/app/app_config/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomsList: RoomsList[] = [  
  
   
  ];
  constructor(@Inject(APP_SERVICE_CONFIG) private appConfig: AppConfig, private http: HttpClient)  { 
    console.log(this.appConfig.apiEndpoint);
    console.log('RoomsService is Initialized' );
  }


  getRooms(){     
return this.http.get<RoomsList[]>('/api/rooms');
  }
  addRooms(room: RoomsList){     
return this.http.post<RoomsList[]>('/api/rooms', room);
  }
  editRooms(room: RoomsList){     
return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`, room);
  }
  deleteRooms(id: string){
    return this.http.delete<RoomsList[]>(`/api/rooms/${id}`);
  }
  getPhotos(){
    const request = new 
    HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true,
      
    });
return this.http.request(request);
  }
}
