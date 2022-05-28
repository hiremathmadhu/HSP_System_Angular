import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBooking } from 'src/app/Models/service-booking';
import { ServiceBookingSerivce } from 'src/app/Services/service-booking.service';

@Component({
  selector: 'app-searchservicebooking',
  templateUrl: './searchservicebooking.component.html',
  styleUrls: ['./searchservicebooking.component.css']
})
export class SearchservicebookingComponent implements OnInit {
item:ServiceBooking
  constructor(private servicebookingService:ServiceBookingSerivce,private router:Router) { 
    this.item = new ServiceBooking();
  }

  ngOnInit(): void {
  }
  Search()
  {
    this.servicebookingService.GetServiceBookingById(this.item.serviceid).subscribe(data=>{
      this.item=data;
      })
      this.router.navigateByUrl('ViewAll');
}
}
