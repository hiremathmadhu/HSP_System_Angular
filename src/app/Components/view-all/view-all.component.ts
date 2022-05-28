import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
customers:Customer[];
  constructor(private customerService:CustomerService) { 
    this.customerService.GetAllCustomers().subscribe(data=>{
      this.customers=data;
      console.log(this.customers);
  })
}
  ngOnInit(): void {      
  }
  DeleteCustomer(id:number)   
   {
     this.customerService.DeleteCustomer(id).subscribe(data=>{
       console.log(data);
     })
   }
}

