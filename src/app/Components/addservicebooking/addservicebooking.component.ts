import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBooking } from 'src/app/Models/service-booking';
import { ServiceBookingSerivce } from 'src/app/Services/service-booking.service';

@Component({
  selector: 'app-addservicebooking',
  templateUrl: './addservicebooking.component.html',
  styleUrls: ['./addservicebooking.component.css']
})
export class AddservicebookingComponent implements OnInit {
item:ServiceBooking
  constructor(private serviceBookingService:ServiceBookingSerivce,private router:Router) {
this.item=new ServiceBooking;
   }

  ngOnInit(): void {
  }
Save(){
  this.serviceBookingService.AddServiceBooking(this.item).subscribe(data=>{    
    console.log(data);
    this.router.navigateByUrl('viewall');
})
}
}
