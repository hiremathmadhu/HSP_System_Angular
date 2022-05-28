import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBooking } from 'src/app/Models/service-booking';
import { ServiceBookingSerivce } from 'src/app/Services/service-booking.service';

@Component({
  selector: 'app-deleteservicebooking',
  templateUrl: './deleteservicebooking.component.html',
  styleUrls: ['./deleteservicebooking.component.css']
})
export class DeleteservicebookingComponent implements OnInit {
item:ServiceBooking
  constructor(private serviceBookingService:ServiceBookingSerivce,private router:Router) {
    this.item = new ServiceBooking();
   }

  ngOnInit(): void {
  }
  Delete(){
    this.serviceBookingService.DeleteServiceBooking(this.item.serviceitemnum).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('view-all');
  }

}
