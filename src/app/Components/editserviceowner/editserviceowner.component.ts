import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOwner } from 'src/app/Models/service-owner';
import { ServiceOwnerSerivce } from 'src/app/Services/service-owner.service';

@Component({
  selector: 'app-editserviceowner',
  templateUrl:'./editserviceowner.component.html',
  styleUrls: ['./editserviceowner.component.css']
})
export class EditserviceOwnerComponent implements OnInit {
item:ServiceOwner
  constructor(private serviceOwnerService:ServiceOwnerSerivce,private router:Router) {
    this.item = new ServiceOwner();
   }

  ngOnInit(): void {
  }
  Edit(){
    this.serviceOwnerService.EditServiceOwner(this.item).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('ViewAll');
  }

}