import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBooking } from 'src/app/Models/service-booking';
import { ServiceBookingSerivce } from 'src/app/Services/service-booking.service';

@Component({
  selector: 'app-editservicebooking',
  templateUrl: './editservicebooking.component.html',
  styleUrls: ['./editservicebooking.component.css']
})
export class EditservicebookingComponent implements OnInit {
item:ServiceBooking
  constructor(private servicebookingService:ServiceBookingSerivce,private router:Router) {
    this.item = new ServiceBooking();
   }

  ngOnInit(): void {
  }
  Edit(){
    this.servicebookingService.EditServiceBooking(this.item).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('ViewAll');
  }

}
