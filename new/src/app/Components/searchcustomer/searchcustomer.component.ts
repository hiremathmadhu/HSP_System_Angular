import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {
item:Customer
  constructor(private customerService:CustomerService,private router:Router) {
    this.item= new Customer();
   }

  ngOnInit(): void {
  }
  Search()
  {
    this.customerService.GetCustomerById(this.item.customerId).subscribe(data=>{
      this.item=data;
      })
      this.router.navigateByUrl('ViewAll');
}
}
