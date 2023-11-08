import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Booking } from './dto/booking_dto';
import { CustomValidators } from './validators/custom_validators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ea-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],

})
export class BookingComponent implements OnInit{
  panelOpenState = false;
  bookingForm! : FormGroup;
  constructor (private config: ConfigService, private fb:FormBuilder, private route:ActivatedRoute) {}
 get  guests(){ return this.bookingForm.get('guests') as FormArray;}
  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    this.bookingForm = this.fb.group({
      roomId:new FormControl({value:roomId, disabled:true},{validators:[Validators.required]}), 
      guestEmail:[''], 
      checkIn:['',Validators.required],   
      boolingStatus:['',{validators:[Validators.required, CustomValidators.ValidateName]}], 
      checkOut:['',{validators:[Validators.required], updateOn:'blur'}], 
      boolingAmount:['',{validators:[Validators.required, CustomValidators.ValidateSpecialChar('test')]}], 
      boolingDate:[''], 
      mobileNumber:[''],
      guestName:[''],
     address:this.fb.group({
      addressline1:[''], 
      addressline2:[''], 
      city:[''], 
      state:[''], 
      country:[''], 
      zipCode:[''], 
     }),
      guestCount:[''], 
      guests:this.fb.array([
        this.fb.group({
          guestsName:[''],
          age:new FormControl({value:'18', disabled:true},{validators:[Validators.required]}),

        })
      ]),
    });
    this.getBookingData();
    this.bookingForm.valueChanges.subscribe(console.log)
  }
getBookingData(){
  this.bookingForm.patchValue({
    // roomId:roomId,
    guestEmail:'test@email.com',
  })
}
  addBooking(){ 
 console.log(   this.bookingForm.getRawValue()
 ) }
addGuest(){
  this.guests.push(this.fb.group({
    guestsName:['hello'],
    age:['hey'],
  }))
}
removeGuest(i : number){
  this.guests.removeAt(i)
}


addPassport(){
  this.bookingForm.addControl('passport', new FormControl(''));
}

removePassport(){
  this.bookingForm.removeControl('passport');
}

}
//  roomId:string; 
//  guestEmail?:string; 
//  checkIn?:[''], 
//  checkOut?:Date; 
//  boolingStatus?:string; 
//  boolingAmount?:[''], 
//  boolingDate?:Date; 
//  mobileNumber?:number;
//  guestName?:string;
//  guestAddress?:string; 
//  guestCity?:string; 
//  guestState?:string; 
//  guestCountry?:string; 
//  guestZipCode?:string; 
//  guestCount?:string; 
//  guests?:Guest[]; 