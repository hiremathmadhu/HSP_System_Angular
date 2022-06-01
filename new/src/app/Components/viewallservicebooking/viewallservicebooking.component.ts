import { Component, OnInit } from '@angular/core';
import { ServiceBooking } from 'src/app/Models/service-booking';
import { ServiceBookingSerivce } from 'src/app/Services/service-booking.service';

@Component({
  selector: 'app-viewallservicebooking',
  templateUrl: './viewallservicebooking.component.html',
  styleUrls: ['./viewallservicebooking.component.css']
})
export class ViewallservicebookingComponent implements OnInit {
servicebookings:ServiceBooking[];
  constructor(private serviceBookingservice:ServiceBookingSerivce) { 
    this.serviceBookingservice.GetAllServiceBookings().subscribe(data=>{
      this.servicebookings=data;
      console.log(this.servicebookings);
    })

  }

  ngOnInit(): void {
  }
  DeleteBooking(id:number)   
  {
    this.serviceBookingservice.DeleteServiceBooking(id).subscribe(data=>{
      console.log(data);
    })
  }
}
