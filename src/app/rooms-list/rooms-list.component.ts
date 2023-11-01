import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms/room';

@Component({
  selector: 'ea-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Dont use onChange and doCheck together
// onChanges is only callled when it detects changes in the @Input() properties
export class RoomsListComponent implements OnInit,OnChanges, OnDestroy{
  ngOnInit(): void {
  }
constructor() { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes in the Onchange Method");
    console.log(changes);
  }
@Input() rooms: RoomsList[] = [];   

@Input() title : string= '';

// @Output() roomSelected : RoomsList = new EventEmitter<RoomsList>();
@Output() roomSelected  =  new EventEmitter<RoomsList>();

selectRoom(room: RoomsList) {
  this.roomSelected.emit(room);
  console.log("room selected");}
}
