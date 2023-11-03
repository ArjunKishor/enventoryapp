import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'ea-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit{
id: number = 0;
id$: Observable<number> = this.router.params.pipe(
  map((params) => params['roomId'])
);  

  ngOnInit(): void {
  // this.router.params.subscribe((params) => { });
  // this.router.snapshot.params['id'];
  // this.router.paramMap.subscribe((params) => { params.get('id');});
  // this.id$ = this.router.params.pipe(
  //   map((params) => params['id'])
  // ); 
  }
constructor(private router: ActivatedRoute) { }
}
