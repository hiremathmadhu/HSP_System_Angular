import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/Models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
item :Customer
  constructor(private customerService:CustomerService, private router:Router) {
this.item=new Customer;
   }

  ngOnInit(): void {
  }
Save()
{
  
  this.customerService.AddCustomer(this.item).subscribe(data=>{    
      console.log(data);
      this.router.navigateByUrl('viewall');
    })
}
}
