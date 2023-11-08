export class Booking{
 roomId?:string; 
 guestEmail?:string; 
 checkIn?:Date; 
 checkOut?:Date; 
 boolingStatus?:string; 
 boolingAmount?:number; 
 boolingDate?:Date; 
 mobileNumber?:number;
 guestName?:string;
 guestAddress?:string; 
 guestCity?:string; 
 guestState?:string; 
 guestCountry?:string; 
 guestZipCode?:string; 
 guestCount?:string; 
 guestList?:Guest[]; 
}

export class Guest{
 guestName?:string;
 guestAddress?:string; 
 guestCity?:string; 
 guestState?:string; 
 guestCountry?:string; 
 guestZipCode?:string; 
 guestCount?:string; 
}