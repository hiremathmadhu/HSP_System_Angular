import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
item:Customer
  constructor(private customerService:CustomerService, private router:Router) {
    this.item=new Customer();
   }

  ngOnInit(): void {
  }
  Edit()
  {
    this.customerService.EditCustomer(this.item).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('ViewAll');
  }
}
