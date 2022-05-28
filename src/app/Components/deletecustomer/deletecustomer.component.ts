import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/Models/customer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {
item:Customer
  constructor(private customerService:CustomerService, private router:Router) {
    this.item= new Customer();
   
  }
  ngOnInit(): void {
  }
  Delete()
  {
    this.customerService.DeleteCustomer(this.item.customerid).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('view-all');
   }
}
